class Recipe:
    def __init__(self, title, ingredients, preparation_time, cooking_method, nutritional_info):
        self.title = title
        self.ingredients = ingredients
        self.preparation_time = preparation_time
        self.cooking_method = cooking_method
        self.nutritional_info = nutritional_info
    def display_recipe(self):
        print(f"Title: {self.title}")
        print(f"Ingredients: {', '.join(self.ingredients)}")
        print(f"Preparation Time: {self.preparation_time} minutes")
        print(f"Cooking Method: {self.cooking_method}")
        print(f"Nutritional Info: {self.nutritional_info}")

class MoroccanRecipe(Recipe):
    def __init__(self, title, ingredients, preparation_time, cooking_method, nutritional_info, spice_level):
        super().__init__(title, ingredients, preparation_time, cooking_method, nutritional_info)
        self.spice_level = spice_level
    def display_additional_info(self):
        print(f"Spice Level: {self.spice_level}")
class EthiopianRecipe(Recipe):
    def __init__(self, title, ingredients, preparation_time, cooking_method, nutritional_info, type_of_spice):
        super().__init__(title, ingredients, preparation_time, cooking_method, nutritional_info)
        self.type_of_spice = type_of_spice
    def display_additional_info(self):
        print(f"Type of Spice: {self.type_of_spice}")
class NigerianRecipe(Recipe):
    def __init__(self, title, ingredients, preparation_time, cooking_method, nutritional_info, main_protein):
        super().__init__(title, ingredients, preparation_time, cooking_method, nutritional_info)
        self.main_protein = main_protein
    def display_additional_info(self):
        print(f"Main Protein: {self.main_protein}")




class Species:
    def __init__(self, name, diet, lifespan):
        self.name = name
        self.diet = diet
        self.lifespan = lifespan

    def describe(self):
        return f"{self.name} has a {self.diet} diet and typically lives for {self.lifespan} years."

# Predator class inherits from Species
class Predator(Species):
    def __init__(self, name, diet, lifespan, hunting_techniques):
        super().__init__(name, diet, lifespan)
        self.hunting_techniques = hunting_techniques

    def hunt(self):
        return f"{self.name} uses various hunting techniques including {', '.join(self.hunting_techniques)}."

# Prey class also inherits from Species
class Prey(Species):
    def __init__(self, name, diet, lifespan, escape_methods):
        super().__init__(name, diet, lifespan)
        self.escape_methods = escape_methods

    def evade_predators(self):
        return f"{self.name} can evade predators using {', '.join(self.escape_methods)}."  


# class Person:
#     def__init__(self,name,age):
#         self.name = name
#         self.age = age
#     def introduce(self):
#         print(f"Hello, my is {self.name} and I am {self.age} years old")

# newPerson=Person("Linet Ndau", 23)
# Person.introduce()
    