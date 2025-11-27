from resources.BaseResource import BaseResource
from models.SolutionsModel import SolutionsModel

class SolutionsList(BaseResource):
    model=SolutionsModel

    field_map = {
        "solution": "solution",
        "solutionIntro": "intro",
        "solutionImg": "img"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificSolution(BaseResource):
    model=SolutionsModel

    field_map = {
        "solution": "solution",
        "solutionIntro": "intro",
        "solutionImg": "img"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)