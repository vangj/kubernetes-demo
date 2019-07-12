import json
import os
import pymysql

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object('conf')
CORS(app, resources={r'/*': {
    'origins': '*',
    'supports_credentials': True,
    'allow_headers': '*'
}})

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Accept,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS, PUT, PATCH, DELETE')
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return json.dumps({'message': 'no one was here'})


@app.route('/api/v1/test', methods=['GET'])
def hello():
    h = {}
    for k, v in request.headers.items():
        h[k] = v

    return json.dumps(h)


@app.route('/api/v1/schools', methods=['GET'])
def get_schools():
    sql = 'select * from school'
    rs = get_results(sql)
    return json.dumps(rs)


@app.route('/api/v1/courses', methods=['GET'])
def get_courses():
    sql = 'select * from course'
    rs = get_results(sql)
    return json.dumps(rs)


@app.route('/api/v1/teachers', methods=['GET'])
def get_teachers():
    sql = 'select * from teacher'
    rs = get_results(sql)
    return json.dumps(rs)


@app.route('/api/v1/students', methods=['GET'])
def get_students():
    sql = 'select * from student'
    rs = get_results(sql)
    return json.dumps(rs)


@app.route('/api/v1/enrollments', methods=['GET'])
def get_enrollments():
    sql = 'select * from enrollment'
    rs = get_results(sql)
    return json.dumps(rs)


@app.route('/api/v1/grades', methods=['GET'])
def get_grades():
    sql = 'select * from grade'
    rs = get_results(sql)
    return json.dumps(rs)


def get_results(sql):
    with con.cursor() as cursor:
        cursor.execute(sql)
        return cursor.fetchall()


def get_connection(config):
    host = config['HOST']
    user = config['USER']
    password = config['PW']
    db = config['DB']
    port = config['PORT']

    connection = pymysql.connect(host=host,
                                    user=user,
                                    password=password,
                                    db=db,
                                    charset='utf8mb4',
                                    port=port,
                                    cursorclass=pymysql.cursors.DictCursor)
    return connection

con = get_connection(app.config)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')