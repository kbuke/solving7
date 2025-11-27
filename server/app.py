from config import app, api, db

from resources.Teams import TeamsList, SpecificTeam
from resources.TeamMembers import TeamMemberList, SpecificTeamMember
from resources.Solutions import SolutionsList, SpecificSolution
from resources.Products import ProductsList, SpecificProduct

api.add_resource(TeamsList, "/teams")
api.add_resource(SpecificTeam, "/teams/<int:id>")

api.add_resource(TeamMemberList, "/teammember")
api.add_resource(SpecificTeamMember, "/teammember/<int:id>")

api.add_resource(SolutionsList, "/solutions")
api.add_resource(SpecificSolution, "/solutions/<int:id>")

api.add_resource(ProductsList, "/products")
api.add_resource(SpecificProduct, "/products/<int:id>")

if __name__ == "__main__":
    app.run(port = 5555, debug = True)