from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

class HomeSectionModel(db.Model, SerializerMixin):
    __tablename__ = "home_sections"

    id = db.Column(db.Integer, primary_key = True)
    heading = db.Column(db.String, nullable = False, unique = True)
    text = db.Column(db.String, nullable = False, unique = True)
    img_1 = db.Column(db.String, nullable = True)
    img_2 = db.Column(db.String, nullable = True)