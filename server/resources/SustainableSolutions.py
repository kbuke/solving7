from resources.BaseResource import BaseResource
from models.SustainableSolutionModel import SustainableSolutionModel

class SustainableSolutionsList(BaseResource):
    model = SustainableSolutionModel

    field_map = {
        "sustainableId" : "sustainable_id",
        "solutionId": "solution_id"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificSustainableSolutions(BaseResource):
    model = SustainableSolutionModel

    field_map = {
        "sustainableId" : "sustainable_id",
        "solutionId": "solution_id"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def delete(self, id):
        return self.delete_instance(id)