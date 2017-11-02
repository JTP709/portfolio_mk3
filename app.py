from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask import make_response, flash, session
from flask_mail import Mail, Message
from model.model import projects
from model.email_config import email_user, email_pass

app = Flask(__name__)

app.config.update(dict(
    DEBUG = True,
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 587,
    MAIL_USE_TLS = True,
    MAIL_USE_SSL = False,
    MAIL_USERNAME = email_user,
    MAIL_PASSWORD = email_pass,
))

mail = Mail(app)

@app.route("/", methods=['GET','POST'])
def main():
	if request.method == 'POST':
		content = request.form.get('content')
		sender = request.form.get('sender')
		msg = Message(content,
					  sender = sender,
					  recipients=["JTP709@gmail.com"])
		mail.send(msg)
		flash("Thanks for contacting me, I'll be in touch!")
	else:
		return render_template('index.html',
								projects=projects)

if __name__ == '__main__':
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.debug = True
    app.run(host='0.0.0.0', port=5000)