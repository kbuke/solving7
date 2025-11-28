from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

from models.SustainableUnModel import SustainableUnModel
from models.SolutionsModel import SolutionsModel

class SustainableSolutionModel(db.Model, SerializerMixin):
    __tablename__ = "sustainable_solutions"

    id = db.Column(db.Integer, primary_key = True)
    sustainable_id = db.Column(db.ForeignKey("sustainable_goals.id"))
    solution_id = db.Column(db.ForeignKey("solutions.id"))

    # VALIDATION
    @validates("sustainable_id", "solution_id")
    def validate_sustainable_solution(self, key, value):
        # 1 - Check value is an integer
        if not isinstance(value, int):
            try:
                value = int(value)
            except:
                raise ValueError("Please enter a proper integer")
        
        # 2 - Check sustainable goal exists 
        if key == "sustainable_id":
            existsing_sustainable_goal = SustainableUnModel.query.filter(SustainableUnModel.id == value).first()
            if not existsing_sustainable_goal:
                raise ValueError(f"Sustainable Goal: {value} is not registered on here")
        
        # 3 - Check solution exists
        if key == "solution_id":
            existing_solution = SolutionsModel.query.filter(SolutionsModel.id == value).first()
            if not existing_solution:
                raise ValueError(f"Solution {value} is not registered on the application")
        
        # 4 - Check if the relationship is already defined
        sustainable_id = value if key == "sustainable_id" else self.sustainable_id
        solution_id = value if key == "solution_id" else self.solution_id

        existing_relation = SustainableSolutionModel.query.filter_by(
            sustainable_id = sustainable_id,
            solution_id = solution_id
        ).first()

        if existing_relation and existing_relation.id != self.id:
            raise ValueError(f"Relationship already exists between Sustainable Goal: {sustainable_id} and Solution: {solution_id}")
        
        return value