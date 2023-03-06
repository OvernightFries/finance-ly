from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Kingsley",
        "about" :"Hello, I am an anspiring web developer!"
    }

    return response_body