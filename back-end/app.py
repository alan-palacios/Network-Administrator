import os
import json
import datetime
import decimal
from endpoints import api
from flask import Flask
from flask_cors import CORS
from bson.objectid import ObjectId


class JSONEncoder(json.JSONEncoder):
    def default(self, o):  # pylint: disable=E0202
        if isinstance(o, decimal.Decimal):
            return float(o)
        if isinstance(o, ObjectId):
            return str(o)
        if isinstance(o, (datetime.datetime, datetime.date)):
            return o.isoformat()
        return json.JSONEncoder.default(self, o)


app = Flask(__name__)
cors = CORS(app)
api.init_app(app)

# use the modified encoder class to handle ObjectId & datetime object while jsonifying the response.
#app.json_encoder = JSONEncoder
app.config["RESTPLUS_JSON"] = {"cls": JSONEncoder}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.getenv('PORT', 50000),
            debug=os.getenv('FLASK_DEBUG', 0))
