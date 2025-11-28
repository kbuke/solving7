from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db

class SolutionsModel(db.Model, SerializerMixin):
    __tablename__ = "solutions"

    id = db.Column(db.Integer, primary_key = True)
    solution = db.Column(db.String, nullable = False)
    intro = db.Column(db.String, nullable = True)
    img = db.Column(db.String)

    # RELATIONSHIPS
    products = db.relationship("ProductsModel", back_populates = "solution")

    sustainable_goals = db.relationship("SustainableUnModel", back_populates = "solutions", secondary = "sustainable_solutions")

    serialize_rules = (
        "-products.solution",

        "-sustainable_goals.solutions",
    )

    # VALIDATIONS
        # Ensure solution is valid, and unique
    @validates("solution")
    def validate_solution(self, key, value):
        # 1 - Ensure a value is given
        if isinstance(value, bool) or value is None or value.strip() == "":
            raise ValueError("Please enter a valid solution")
        
        # 2 - Ensure it is of type string
        if not isinstance(value, str):
            try:
                value = str(value)
            except ValueError:
                raise ValueError("Please enter a valid string")
        
        # 3 - Ensure no duplicates
        existing_solution = SolutionsModel.query.filter(SolutionsModel.solution == value).first()
        if existing_solution and existing_solution.id != self.id:
            raise ValueError(f"{value} is an already registered solution")
        
        # 4 - Ensure no more than 7 instances
        count = SolutionsModel.query.count()
        if self.id is None and count >= 7:
            raise ValueError("Can not have more than 7 solutions")
        
        return value
    