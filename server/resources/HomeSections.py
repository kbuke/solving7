from resources.BaseResource import BaseResource
from models.HomeSectionModel import HomeSectionModel

class HomeSectionList(BaseResource):
    model = HomeSectionModel

    field_map = {
        "homeSectionHeading": "heading",
        "homeSectionText": "text",
        "homeSectionImg1": "img_1",
        "homeSectionImg2": "img_2",
        "accessor": "accessor"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()
    
class SpecificHomeSection(BaseResource):
    model = HomeSectionModel

    field_map = {
        "homeSectionHeading": "heading",
        "homeSectionText": "text",
        "homeSectionImg1": "img_1",
        "homeSectionImg2": "img_2",
        "accessor": "accessor"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)