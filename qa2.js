class Recipe {
    constructor(title, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
        this.title = title;
        this.ingredients = ingredients;
        this.preparationTime = preparationTime;
        this.cookingMethod = cookingMethod;
        this.nutritionalInfo = nutritionalInfo;
    }

    displayRecipe() {
        console.log(`Title: ${this.title}`);
        console.log(`Ingredients: ${this.ingredients.join(', ')}`);
        console.log(`Preparation Time: ${this.preparationTime} minutes`);
        console.log(`Cooking Method: ${this.cookingMethod}`);
        console.log(`Nutritional Info: ${this.nutritionalInfo}`);
    }
}


class MoroccanRecipe extends Recipe {
    constructor(title, ingredients, preparationTime, cookingMethod, nutritionalInfo, spiceLevel) {
        super(title, ingredients, preparationTime, cookingMethod, nutritionalInfo);
        this.spiceLevel = spiceLevel;
    }

    displayAdditionalInfo() {
        console.log(`Spice Level: ${this.spiceLevel}`);
    }
}

class EthiopianRecipe extends Recipe {
    constructor(title, ingredients, preparationTime, cookingMethod, nutritionalInfo, typeOfSpice) {
        super(title, ingredients, preparationTime, cookingMethod, nutritionalInfo);
        this.typeOfSpice = typeOfSpice;
    }

    displayAdditionalInfo() {
        console.log(`Type of Spice: ${this.typeOfSpice}`);
    }
}

class NigerianRecipe extends Recipe {
    constructor(title, ingredients, preparationTime, cookingMethod, nutritionalInfo, mainProtein) {
        super(title, ingredients, preparationTime, cookingMethod, nutritionalInfo);
        this.mainProtein = mainProtein;
    }

    displayAdditionalInfo() {
        console.log(`Main Protein: ${this.mainProtein}`);
    }
}

let moroccanRecipe = new MoroccanRecipe(
    "Chicken Tagine",
    ["chicken", "onions", "garlic", "olive oil", "cumin", "coriander", "cinnamon", "ginger", "chicken broth"],
    30,
    "Stew",
    "High in protein, moderate in fat, low in carbohydrates",
    5
);

let ethiopianRecipe = new EthiopianRecipe(
    "Injera",
    ["teff flour", "water", "yeast", "salt"],
    2,
    "Ferment",
    "High in fiber, moderate in protein, low in fat",
    "Berbere"
);

let nigerianRecipe = new NigerianRecipe(
    "Jollof Rice",
    ["rice", "tomatoes", "onions", "peppers", "oil", "salt", "pepper", "chicken broth"],
    30,
    "Boil",
    "High in carbohydrates, moderate in protein, low in fat",
    "Chicken"
);

moroccanRecipe.displayRecipe();
moroccanRecipe.displayAdditionalInfo();

ethiopianRecipe.displayRecipe();
ethiopianRecipe.displayAdditionalInfo();

nigerianRecipe.displayRecipe();
nigerianRecipe.displayAdditionalInfo();

