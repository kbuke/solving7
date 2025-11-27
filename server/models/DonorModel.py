from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db

class DonorModel(db.Model, SerializerMixin):
    __tablename__ = "donors"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    img = db.Column(db.String, nullable = False)

    # VALIDATIONS
        # Check name is unique and valid
    @validates("name")
    def validate_name(self, key, value):
        if isinstance(value, bool) or value is None or value.strip() == "":
            raise ValueError("Please enter a valid value")
        if not isinstance(value, str):
            try:
                value = str(value)
            except:
                raise ValueError("Please enter a valid string")
        
        existing_donor = DonorModel.query.filter(DonorModel.name == value).first()
        if existing_donor and existing_donor.id != self.id:
            raise ValueError(f"{value} is already registered on the application.")
        
        return value