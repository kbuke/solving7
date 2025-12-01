from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db

class TeamsModel(db.Model, SerializerMixin):
    __tablename__ = "teams"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    intro = db.Column(db.String, nullable = True)

    # SET UP RELATIONS
        # RLT W. TEAM-MEMBERS (ONE-to-many)
    members = db.relationship("TeamMemberModel", back_populates = "team")

    serialize_rules = (
        "-members.team",
        "-members.team_id",
        "-members._password_hash"
    )
    
    # SET UP VALIDATIONS
        # ENSURE TEAM NAME IS UNIQUE
    @validates("team_name")
    def validate_team_name(self, key, value):
        # 1 - Ensure value is not null, a boolean or an empty string
        if isinstance(value, bool) or value is None or value.strip == "":
            raise ValueError("Please enter a valid name")
        
        # 2 - If value is not a string, try and convert it
        if not isinstance(value, str):
            try:
                value = str(value)
            except ValueError:
                raise ValueError("Please enter a valid string")
            
        # 3 - Ensure the value is unique
        existing = TeamsModel.query.filter(TeamsModel.team_name == value).first()
        if existing and existing.id != self.id:
            raise ValueError(f"Team name {value} is already registered on the app")
        
        return value
        
