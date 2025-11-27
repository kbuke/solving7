from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from models.SolutionsModel import SolutionsModel

from config import db 

class ProductsModel(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    img = db.Column(db.String)
    no_made = db.Column(db.Integer, nullable = False)

    # RELATIONSHIPS
        # Solutions (one-to-MANY)
    solution_id = db.Column(db.ForeignKey("solutions.id"))
    solution = db.relationship("SolutionsModel", back_populates = "products")

    serialize_rules=(
        "-solution.products",
    )

    # VALIDATIONS
        # Ensure name is unique
    @validates("name")
    def validate_product_name(self, key, value):
        if isinstance(value, bool) or value is None or value.strip() == "":
            raise ValueError("Please enter valid product name")
        
        if not isinstance(value, str):
            try:
                value = str(value)
            except ValueError:
                raise ValueError("Please enter valid string")
        
        existing_product = ProductsModel.query.filter(ProductsModel.name == value).first()
        if existing_product and existing_product.id != self.id:
            raise ValueError(f"{value} is an already registered product")
        
        return value
        
        # Ensure solution exists
    @validates("solution_id")
    def validate_solution(self, key, value):
        if not isinstance(value, int):
            try:
                value = int(value)
            except ValueError:
                raise ValueError("Please enter an integer")

        existing_solution = SolutionsModel.query.filter(SolutionsModel.id == value).first()
        if not existing_solution:
            raise ValueError(f"Solution {value} is not registered on the app")

        return value            