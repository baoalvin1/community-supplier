from flask import Flask, render_template
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

@app.route("/get", methods=["GET"])
def get():
    """GET in server"""
    response = jsonify(message="Simple server is running")

    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route("/post", methods=["POST"])
@cross_origin()
def post():
    """POST in server"""
    return jsonify(message="POST request returned")

if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
