from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from models.TeamsModel import TeamsModel

from config import db 
import re

class TeamMemberModel(db.Model, SerializerMixin):
    __tablename__ = "team_members"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    img = db.Column(db.String, nullable = True)
    position = db.Column(db.String, nullable = False)
    intro = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = True)

    # Set up relationship with teams
    team_id = db.Column(db.ForeignKey("teams.id"))
    team = db.relationship("TeamsModel", back_populates = "members")

    serialize_rules = (
        "-team",
    )

    # VALIDATIONS
        # Enter validation for email
            # Ensure it is entered as email format
            # Ensure it follows the @solving7green.com format
    @validates("email")
    def validate_team_email(self, key, value):
        # 1 - Ensure if no email is passed it will still pass
        if value is None or value.strip() == "":
            return value 
        
        # 2 - Ensure if a value is given it meets a certain pattern
        email_pattern = r"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$" 

        if not re.match(email_pattern, value):
            raise ValueError("Invalid email address")
        
        # 3 - Check email address ends in @solving7green.com
        if not value.endswith("@solving7green.com"):
            raise ValueError("Email address must end with @solving7green.com")
        
        return value
    
        # Ensure validation for team_id
    @validates("team_id")
    def validate_team(self, key, value):
        # 1 - Check team exists
        existing_team = TeamsModel.query.filter(TeamsModel.id == value).first()
        if not existing_team:
            raise ValueError(f"Team {value} is not registered on the app.")
