from config import app, api, db

from resources.Teams import TeamsList, SpecificTeam
from resources.TeamMembers import TeamMemberList, SpecificTeamMember
from resources.Solutions import SolutionsList, SpecificSolution
from resources.Products import ProductsList, SpecificProduct
from resources.Donors import DonorList, SpecificDonor
from resources.SustainableUn import SustainableUnList, SpecificSustainableUn
from resources.HomeSections import HomeSectionList, SpecificHomeSection
from resources.SustainableSolutions import SustainableSolutionsList, SpecificSustainableSolutions
from resources.Login import Login
from resources.LogOut import Logout
from resources.CheckSession import CheckSession

api.add_resource(TeamsList, "/teams")
api.add_resource(SpecificTeam, "/teams/<int:id>")

api.add_resource(TeamMemberList, "/teammember")
api.add_resource(SpecificTeamMember, "/teammember/<int:id>")

api.add_resource(SolutionsList, "/solutions")
api.add_resource(SpecificSolution, "/solutions/<int:id>")

api.add_resource(ProductsList, "/products")
api.add_resource(SpecificProduct, "/products/<int:id>")

api.add_resource(DonorList, "/donors")
api.add_resource(SpecificDonor, "/donors/<int:id>")

api.add_resource(SustainableUnList, "/sustainabilities")
api.add_resource(SpecificSustainableUn, "/sustainabilities/<int:id>")

api.add_resource(HomeSectionList, "/homesection")
api.add_resource(SpecificHomeSection, "/homesection/<int:id>")

api.add_resource(SustainableSolutionsList, "/sustainablesolutions")
api.add_resource(SpecificSustainableSolutions, "/sustainablesolutions/<int:id>")

api.add_resource(CheckSession, "/session")

api.add_resource(Login, "/login")

api.add_resource(Logout, "/logout")

if __name__ == "__main__":
    app.run(port = 5555, debug = True)