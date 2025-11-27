from resources.BaseResource import BaseResource
from models.DonorModel import DonorModel

class DonorList(BaseResource):
    model = DonorModel

    field_map = {
        "donorName": "name",
        "donorImg": "img"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()
    
class SpecificDonor(BaseResource):
    model = DonorModel

    field_map = {
        "donorName": "name",
        "donorImg": "img"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)