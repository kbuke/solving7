from resources.BaseResource import BaseResource
from models.ProductsModel import ProductsModel

class ProductsList(BaseResource):
    model = ProductsModel

    field_map = {
        "productName": "name",
        "productImg": "img",
        "numberOfProduct": "no_made",
        "solutionId": "solution_id"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()
    
class SpecificProduct(BaseResource):
    model = ProductsModel

    field_map = {
        "productName": "name",
        "productImg": "img",
        "numberOfProduct": "no_made"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)