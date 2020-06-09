from flask import Flask, request
from flask_restplus import Resource, Api, fields
from flask_pymongo import PyMongo
import datetime
from bson import json_util, ObjectId
import json

app = Flask(__name__)

app.config[
    "MONGO_URI"] = "mongodb://localhost:27017/Users"

api = Api(app, version='1.0.0', title='Users', description='User\'s Data')

api = api.namespace('', 'Users')

mongo = PyMongo(app)

m_user = api.model('user', {'firstname': fields.String('firstname'),
                            'lastname': fields.String('lastname'),
                            'email': fields.String('email'),
                            'password': fields.String('password'),
                            'DOB': fields.String('DOB'),
                            'status': fields.String('status')
                            })


@api.route('/users')
class Users(Resource):
    def get(self):
        userdata = mongo.db.UserData
        users = userdata.find()
        print(type(users))
        m_user1 = []
        for user in users:
            m_user1.append(user)
        return json.loads(json_util.dumps(m_user1))

    @api.expect(m_user)
    def post(self):
        datauser = request.get_json()
        print('yesno')
        userdata = mongo.db.UserData
        print('yes')
        user = userdata.find_one({'email': datauser['email']})
        print('no')
        print(user)
        if user:
            return {'message': 'User Already Exists'}
        else:
            userdata.insert({'firstname': datauser['firstname'],
                             'lastname': datauser['lastname'],
                             'email': datauser['email'],
                             'password': datauser['password'].encode('utf-8'),
                             'DOB': datauser['DOB'],
                             'status': datauser['status']})
            return {'message': 'User Added'}

    @api.expect(m_user)
    def put(self):
        datauser = request.get_json()
        userdata = mongo.db.UserData
        user = userdata.find_one({'email': datauser['email']})
        print(datauser['email'])
        if user:
            user['password'] = datauser['password'].encode('utf-8')
            userdata.save(user)
            return {'message': 'User Modified'}
        else:
            return {'message': 'User doesn\'t exists'}

    @api.expect(m_user)
    def delete(self):
        datauser = request.get_json()
        userdata = mongo.db.UserData
        user = userdata.find_one({'email': datauser['email']})
        if user and user['password'] == datauser['password'].encode('utf-8'):
            userdata.remove(user)
            return {'message': 'User Deleted'}
        else:
            return {'message': 'User doesn\'t exists'}


@api.route('/today_BD')
class Users(Resource):
    def get(self):
        userdata = mongo.db.UserData
        date = datetime.date.today()
        today = date.strftime("%m/%d")
        users = userdata.find()
        today_bd = []
        for user in users:
            print(user['DOB'][5:])
            if user['DOB'][5:] == today:
                today_bd.append(user)
        return json.loads(json_util.dumps(today_bd))


@api.route('/month_BD')
class Users(Resource):
    def get(self):
        userdata = mongo.db.UserData
        date = datetime.date.today()
        month = date.strftime("%m")
        users = userdata.find()
        month_bd = []
        for user in users:
            if user['DOB'][5:7] == month:
                month_bd.append(user)
        return json.loads(json_util.dumps(month_bd))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, debug=True)
