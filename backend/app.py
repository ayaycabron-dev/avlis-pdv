import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv
from flask_mail import Mail, Message
from datetime import datetime

load_dotenv()

app = Flask(__name__)

frontend_origin = 'https://avlis-pdv.onrender.com'
CORS(app, resources={r"/api/*": {"origins": frontend_origin}})

app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'true').lower() == 'true'
app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL', 'false').lower() == 'true'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')
app.config['MAIL_RECIPIENT_EMAIL'] = os.getenv('MAIL_RECIPIENT_EMAIL', 'contato@avlis.com')

mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    if request.is_json:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message_content = data.get('message')

        if not name or not email or not message_content:
            return jsonify({'message': 'Todos os campos são obrigatórios!'}), 400

        try:
            msg = Message(
                subject=f"Nova Mensagem do Site AVLIS PDV de {name}",
                recipients=[app.config['MAIL_RECIPIENT_EMAIL']],
                html=f"""
                <p><strong>Nome:</strong> {name}</p>
                <p><strong>E-mail do remetente (informado no formulário):</strong> {email}</p>
                <p><strong>Mensagem:</strong></p>
                <p>{message_content}</p>
                """
            )
            mail.send(msg)
            print(f"E-mail de contato enviado com sucesso de {name} ({email}) PARA: {app.config['MAIL_RECIPIENT_EMAIL']}")
            return jsonify({'message': 'Mensagem enviada com sucesso!'}), 200
        except Exception as e:
            print(f"Erro ao enviar e-mail: {e}")
            return jsonify({'message': 'Erro ao enviar mensagem. Tente novamente mais tarde.'}), 500
    return jsonify({'message': 'Requisição deve ser JSON'}), 400

@app.route('/api/download', methods=['GET'])
def download_program():
    platform = request.args.get('platform')
    download_dir = os.path.join(app.root_path, 'downloads')

    if not os.path.exists(download_dir):
        os.makedirs(download_dir)

    filename = None
    if platform == 'windows':
        filename = 'AVLIS_PDV_Installer_Windows.rar'
    elif platform == 'mac':
        filename = 'AVLIS_PDV_Installer_macOS.dmg'
    elif platform == 'linux':
        filename = 'AVLIS_PDV_Installer_Linux.deb'
    else:
        return jsonify({'message': 'Plataforma de download inválida.'}), 400

    file_path = os.path.join(download_dir, filename)

    if not os.path.exists(file_path):
        print(f"Erro: Arquivo de download não encontrado no servidor: {file_path}")
        return jsonify({'message': f'Arquivo de download para {platform} não encontrado.'}), 404

    with open(os.path.join(download_dir, 'download_log.txt'), 'a') as log_file:
        log_file.write(f"Download: {filename} | Plataforma: {platform} | IP: {request.remote_addr} | Data: {datetime.now()}\n")
    print(f"Download registrado: {filename} para {platform}")

    return send_from_directory(download_dir, filename, as_attachment=True)

@app.route('/')
def index():
    return send_from_directory(os.path.join(app.root_path, 'frontend', 'build'), 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(os.path.join(app.root_path, 'frontend', 'build', 'static'), path)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.getenv('PORT', 5000)))
