from flask import Flask
from flask_mail import Mail
from flask_mail import Message
from flask_restplus import Namespace, Resource
from datetime import datetime
import os
import pymongo
from pymongo.collection import ReturnDocument
from bson.json_util import dumps

app = Flask(__name__)
mail = Mail(app)

#Database
myclient = pymongo.MongoClient(os.getenv("DB_CONN"))
db = myclient[os.getenv("DB_NAME")]
notifications_col = db["app_users"]
notifications_col.create_index("notification", unique=True)

def insertNotification(message, recipient):
    data={
        message,
        recipient
    }
    result_id = notifications_col.insert_one(data).inserted_id
    if result_id:
        return {'msg': 'Inserted'}, 201
    raise ValueError('app_users not found')

def sendEmail(message, recipient):
    msg = Message(message,
                  sender="network@manager.com",
                  recipients=[recipient])

def interfaceNotification(interface, up, recipient):
    if(up):
        message=f"The interface {interface} is up.{datetime.now()}"
    else:
        message=f"The interface {interface} is down.{datetime.now()}"
    sendEmail(message, recipient)
    insertNotification(message, recipient)

def dataModNotification(device, recipient):
    message=f"Some data have been modificated on device {device}.{datetime.now()}"
    sendEmail(message, recipient)
    insertNotification(message, recipient)

def damagedPackagesNotification(percentage, recipient):
    message=f"{percentage}% packages have been damaged in the last hour.{datetime.now()}"
    sendEmail(message, recipient)
    insertNotification(message, recipient)

def lostPackagesNotification(percentage, recipient):
    message=f"{percentage}% packages have been lost in the last hour.{datetime.now()}"
    sendEmail(message, recipient)
    insertNotification(message, recipient)