from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask import make_response, flash, session
from model.model import projects
app = Flask(__name__)

@app.route("/")
def main():
    return render_template('index.html',
                           projects=projects)

if __name__ == '__main__':
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.debug = True
    app.run(host='0.0.0.0', port=5000)