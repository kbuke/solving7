from flask import session
from flask_restful import Resource
from models.TeamMemberModel import TeamMemberModel

class CheckSession(Resource):
    def get(self):
        user_id = session.get("user_id")
        if user_id:
            user = TeamMemberModel.query.filter(TeamMemberModel.id == user_id).first()
            if user:
                return user.to_dict(), 200
        return {"error": "Unauthorized user"}, 401