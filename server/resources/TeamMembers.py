from resources.BaseResource import BaseResource
from models.TeamMemberModel import TeamMemberModel

class TeamMemberList(BaseResource):
    model = TeamMemberModel

    field_map = {
        "name": "name",
        "img": "img",
        "position": "position",
        "intro": "intro",
        "email": "email",
        "teamId": "team_id",
        "userPassword": "password_hash"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificTeamMember(BaseResource):
    model = TeamMemberModel

    field_map = {
        "name": "name",
        "img": "img",
        "position": "position",
        "intro": "intro",
        "email": "email",
        "userPassword": "password_hash"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)