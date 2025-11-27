from resources.BaseResource import BaseResource
from models.SustainableUnModel import SustainableUnModel

class SustainableUnList(BaseResource):
    model=SustainableUnModel

    field_map = {
        "sustainableGoal": "goal",
        "sustainableLogo": "logo",
        "sustainableImg": "img",
        "sustainableInfo": "info"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()
    
class SpecificSustainableUn(BaseResource):
   model=SustainableUnModel

   field_map = {
        "sustainableGoal": "goal",
        "sustainableLogo": "logo",
        "sustainableImg": "img",
        "sustainableInfo": "info" 
   }

   def get(self, id):
       return self.get_specific(id)
   
   def patch(self, id):
       return self.patch_instance(id)
   
   def delete(self, id):
       return self.delete_instance(id)