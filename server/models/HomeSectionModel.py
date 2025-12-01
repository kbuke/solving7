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
    accessor = db.Column(db.String, nullable = False, server_default="")

    @validates("accessor")
    def validate_accessor(self, key, value):
        if isinstance(value, bool) or value is None or value.strip() == "":
            raise ValueError("Value can not be a boolean, null or empty string")
        
        if not isinstance(value, str):
            try:
                value = str(value)
            except:
                raise ValueError("Please enter a valid string")
        
        existing_accessor = HomeSectionModel.query.filter(HomeSectionModel.accessor == value).first()
        if existing_accessor and existing_accessor.id != self.id:
            raise ValueError(f"Accessor {value} is already registered on the app.")
        
        return value