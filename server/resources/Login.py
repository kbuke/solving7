from flask import session, request
from flask_restful import Resource

from config import db 

from models.TeamMemberModel import TeamMemberModel

class Login(Resource):
    def post(self):
        json = request.get_json()

        email = json.get("userEmail")
        password = json.get("userPassword")

        if not email or not password:
            return{"error": "Email and password are required"}, 400
        
        user = TeamMemberModel.query.filter(TeamMemberModel.email == email).first()

        if user and user.authenticate(password):
            session["user_id"] = user.id
            return user.to_dict(), 200 
        return {"error": "Invalid email or password"}, 401