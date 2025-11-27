from config import app, api

from resources.Team import TeamMemberList, SpecificTeamMember

api.add_resource(TeamMemberList, "/teammember")
api.add_resource(SpecificTeamMember, "/teammember/<int:id>")

if __name__ == "__main__":
    app.run(port = 5555, debug = True)