import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv
from flask_mail import Mail, Message
from datetime import datetime # Importar datetime para o log

# Carrega as variáveis de ambiente do arquivo .env
load_dotenv()

app = Flask(__name__)
# Configura o CORS para permitir requisições do seu frontend React
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# --- Configurações do Flask-Mail ---
# Pegue as credenciais das variáveis de ambiente para segurança
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'true').lower() == 'true'
# REMOVIDO PARÊNTESE EXTRA AQUI V
app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL', 'false').lower() == 'true'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME') # Seu e-mail (ex: seu.email@gmail.com)
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD') # Sua senha de app do Gmail ou senha do SMTP
# CORRIGIDO: Agora pega o valor de MAIL_DEFAULT_SENDER do .env explicitamente
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')
mail = Mail(app)

# --- Rotas de API ---

@app.route('/api/contact', methods=['POST'])
def contact():
    """
    Rota para receber dados do formulário de contato e enviar um e-mail.
    """
    if request.is_json:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message_content = data.get('message') # Renomeado para evitar conflito com a classe Message

        if not name or not email or not message_content:
            return jsonify({'message': 'Todos os campos são obrigatórios!'}), 400

        try:
            msg = Message(
                subject=f"Nova Mensagem do Site AVLIS PDV de {name}",
                # PARA TESTES: Força o envio para viniciuscloudfy@gmail.com
                # Em produção, você mudaria para: recipients=[os.getenv('MAIL_RECIPIENT_EMAIL', 'contato@avlis.com')],
                recipients=['viniciuscloudfy@gmail.com'],
                html=f"""
                <p><strong>Nome:</strong> {name}</p>
                <p><strong>E-mail do remetente (informado no formulário):</strong> {email}</p>
                <p><strong>Mensagem:</strong></p>
                <p>{message_content}</p>
                """
            )
            mail.send(msg)
            # Log para confirmar para onde o e-mail foi enviado em modo de teste
            print(f"E-mail de contato enviado com sucesso de {name} ({email}) PARA TESTE: viniciuscloudfy@gmail.com")
            return jsonify({'message': 'Mensagem enviada com sucesso!'}), 200
        except Exception as e:
            print(f"Erro ao enviar e-mail: {e}")
            return jsonify({'message': 'Erro ao enviar mensagem. Tente novamente mais tarde.'}), 500
    return jsonify({'message': 'Requisição deve ser JSON'}), 400

@app.route('/api/download', methods=['GET'])
def download_program():
    """
    Rota para servir o arquivo de download do programa e registrar.
    Você deve ter os arquivos do seu programa (instaladores) na pasta 'downloads' dentro do 'backend'.
    """
    platform = request.args.get('platform')
    # Crie uma pasta 'downloads' no mesmo nível do app.py e coloque seus instaladores lá.
    download_dir = os.path.join(app.root_path, 'downloads')

    if not os.path.exists(download_dir):
        # Apenas cria a pasta, não criamos mais arquivos dummy aqui
        os.makedirs(download_dir) 

    filename = None
    if platform == 'windows':
        # Assumindo que o seu RAR para Windows se chama 'AVLIS_PDV_Installer_Windows.rar'
        # ALtere este nome de arquivo para o nome exato do seu RAR se for diferente!
        filename = 'AVLIS_PDV_Installer_Windows.rar'
    elif platform == 'mac':
        filename = 'AVLIS_PDV_Installer_macOS.dmg'
    elif platform == 'linux':
        filename = 'AVLIS_PDV_Installer_Linux.deb' # Ou .rpm, .AppImage, etc.
    else:
        return jsonify({'message': 'Plataforma de download inválida.'}), 400

    file_path = os.path.join(download_dir, filename)

    if not os.path.exists(file_path):
        # Se o arquivo real não for encontrado, retorna um erro 404
        print(f"Erro: Arquivo de download não encontrado no servidor: {file_path}")
        return jsonify({'message': f'Arquivo de download para {platform} não encontrado. Por favor, entre em contato com o suporte.'}), 404

    # --- Registro de Download (Exemplo Simples) ---
    # Para um registro mais robusto, use um banco de dados (SQLite, PostgreSQL, etc.)
    with open(os.path.join(download_dir, 'download_log.txt'), 'a') as log_file:
        log_file.write(f"Download: {filename} | Plataforma: {platform} | IP: {request.remote_addr} | Data: {datetime.now()}\n")
    print(f"Download registrado: {filename} para {platform}")

    # Envia o arquivo para o cliente
    return send_from_directory(download_dir, filename, as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)
