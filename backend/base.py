from urllib import response
from flask import Flask
import openai

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Kingsley",
        "about" :"Hello, I am an aspiring web developer!"

    }

    return response_body

# Below is testing for GPT APIs using Astronomical Observatories (art gen)
def gpt_profile():
    response_generator = {
    openai.Completion.create(
    engine="davinci",
    prompt="Make a list of astronomical observatories:"
    )
    }

    return response_generator

