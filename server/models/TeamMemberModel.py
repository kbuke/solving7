from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
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