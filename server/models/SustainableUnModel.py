from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
 
from config import db 

class SustainableUnModel(db.Model, SerializerMixin):
    __tablename__ = "sustainable_goals"

    id = db.Column(db.Integer, primary_key = True)
    goal = db.Column(db.String, nullable = False, unique = True)
    logo = db.Column(db.String, nullable = True)
    img = db.Column(db.String, nullable = True)
    info = db.Column(db.String, nullable = True)

    # RELATIONSHIPS
    solutions = db.relationship("SolutionsModel", back_populates = "sustainable_goals", secondary = "sustainable_solutions")

    serialize_rules = (
        "-solutions.sustainable_goals",
    )
    
    # VALIDATE
    @validates("goal")
    def validate_sustainable_goal(self, key, value):
        # 1 - Check it is not a boolean or null value
        if isinstance(value, bool) or value is None or value.strip() == "":
            raise ValueError("Please enter a valid UN Goal")
        
        # 2 - Check if it can be converted to a string
        if not isinstance(value, str):
            try:
                value = str(value)
            except:
                raise ValueError("Please enter a valud string")
        
        # 3 - Check value isn't registered
        existing_goal = SustainableUnModel.query.filter(SustainableUnModel.goal == value).first()
        if existing_goal and existing_goal.id != self.id:
            raise ValueError(f"{value} is an already registered goal on this app.")
        
        # 4 - Check that there are not more than 17 goals
        count = SustainableUnModel.query.count()
        if self.id is None and count >= 17:
            raise ValueError("There are only 17 UN Sustainable Goals")
        
        return value
