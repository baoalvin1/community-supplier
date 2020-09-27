from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS

cluster = MongoClient("mongodb+srv://newuser:Shellhacks2020@cluster0.e2pi8.gcp.mongodb.net/CommunitySupplierDatabase?retryWrites=true&w=majority")
db = cluster["CommunitySupplierDatabase"]
collection = db["Requests"]


"""collection.insert_one(
    {
        "_id":0,
        "hospitalName":"Memorial West",
        "itemType":"Ventilator",
        "quantityAsked": 5,
        "hasFile":True,
        "date": d1
    }
)"""

app = Flask(__name__)
CORS(app) #enables


"""@app.route('/')
def root():
    # For the sake of example, use static information to inflate the template.
    # This will be replaced with real information in later steps.
    return render_template('index.html')""" # pointless function now as rendering is no longer needed.

# @app.route("/", methods=["GET, POST"])
# def get():
#     """GET in server"""
#     # x = collection.find()
#     response = jsonify(message="Simple server is running")
#
#     # Enable Access-Control-Allow-Origin
#     response.headers.add("Access-Control-Allow-Origin", "*")
#     return response

@app.route("/", methods=["GET, POST"])
def post():
    if request.method == "POST":
        try:
            hospitalName = request.json['hospitalName']
            itemType = request.json['itemType']
            quantityAsked = request.json['quantityAsked']
            address = request.json['address']

            collection.insert_one(
                {
                    "hospitalName":hospitalName,
                    "address":address,
                    "itemType":itemType,
                    "quantityAsked": quantityAsked
                }
            )

        except Exception as ex:
            template = "An exception of type {0} occurred. Arguments:\n{1!r}"
            message = template.format(type(ex).__name__, ex.args)
            return jsonify(message=message)
        return jsonify(message="POST request returned")
    else:
        response = jsonify(message="Simple server is running")

        # Enable Access-Control-Allow-Origin
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
