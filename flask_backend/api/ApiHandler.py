from flask_restful import Api, Resource

class ApiHandler(Resource):
    def get(self):
        return {
        'resultStatus': 'SUCCESS',
        'message': "Hello Api Handler ApiHandler.py ruiewruqiue"
        }