import os
import requests
import json
from flask import (
    Flask, render_template, url_for, redirect, request, flash, session)
from werkzeug.security import generate_password_hash, check_password_hash


app = Flask(__name__)


# Home page

@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html")


@app.route("/signup", methods=["GET", "POST"])
def signup():
    return render_template("signup.html")


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 8080)))