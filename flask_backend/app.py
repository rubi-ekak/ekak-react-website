from flask import Flask, render_template, request, send_file, session, redirect, g, url_for, jsonify
from api.ApiHandler import ApiHandler
from flask_restful import Api, Resource #ModuleNotFoundError: No module named 'flask_restful'= pip install flask-restful
from flask_cors import CORS  #ModuleNotFoundError: No module named 'flask_cors'= pip install Flask-Cors

# Local Modules
import check_Status
import today_metric
from database_connection import ArgusDB

app=Flask(__name__)
CORS(app)
api=Api(app)
api.add_resource(ApiHandler,'/flask')

@app.route("/")
def hello_world():
  return "<p>Hello,world </p>"

@app.route("/world")
def world():
  return {
        'resultStatus': 'SUCCESS',
        'message': "Hello Api Handler ApiHandler.py ruiewruqiue"
        }

@app.route('/argusStatus', methods=['GET'])
def argusStatus():

    # data = jsonify(check_Status.jsonDeviceStatus('Argus_101'))
    # print("jsonDeviceStatus", data)
    # return data
    return check_Status.jsonDeviceStatus('Argus_101')


@app.route('/todayMetric', methods=['GET'])
def todayMetric():
        # if argusID in session['allArgus']:
    jsonMetricToday = today_metric.jsonTodayMetric('Argus_101')
    print(jsonMetricToday)
    return jsonify(jsonMetricToday)

@app.route('/teamData',methods=['GET'])
def teamData():
    return ArgusDB().get_all_team_dict('Argus_101')


if __name__ == '__main__':
    app.run(debug=True)
