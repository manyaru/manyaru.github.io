from flask import Flask, request, jsonify
from flask_cors import CORS
from notification import Email

app = Flask(__name__)
CORS(app)

@app.route("/")
def Home():
    return "App is Alive"

@app.route("/sendEmail", methods=["POST"])
def sendEmail():
    request_data = request.get_json()
    receiver = request_data["receiver"]
    message = request_data["message"]
    x = Email()
    x.sendResults(receiver, message)
    return jsonify({
        "state": True,
        "message": "Email sent successfully"
    })

if __name__ == "__main__":
    app.run(debug=True)