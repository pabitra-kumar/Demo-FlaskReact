from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory

app = Flask(__name__, static_folder="my-app/build", static_url_path='')
CORS(app)


@app.route("/api", methods=['POST'])
def post_data():
    if request.is_json:
        data = request.json  # Get the JSON data from the request
        # Process the data as needed (e.g., save it to a database)
        num = data.get('num')
        num = int(num)
        print(type(num))
        # num = num * 2
        return jsonify({'num': num}), 201
    else:
        return jsonify({'num': -1}), 400


@app.route("/")
def hello_world():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/result")
def result():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    app.run(debug=True, port=8000)
