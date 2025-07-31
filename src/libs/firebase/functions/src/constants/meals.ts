export interface Meal {
    id: number;
    name: string;
    description: string;
    cuisine: string;
    category: string;
    cookingTime: number; // in minutes
    difficulty: 'Easy' | 'Medium' | 'Hard';
    ingredients: string[];
    calories: number;
    tags: string[];
}

export const mealList: Meal[] = [
    // Italian Cuisine
    {
        id: 1,
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta with eggs, cheese, pancetta, and black pepper",
        cuisine: "Italian",
        category: "Pasta",
        cookingTime: 20,
        difficulty: "Medium",
        ingredients: ["spaghetti", "eggs", "pecorino romano", "pancetta", "black pepper"],
        calories: 450,
        tags: ["comfort food", "traditional", "quick"]
    },
    {
        id: 2,
        name: "Margherita Pizza",
        description: "Traditional Neapolitan pizza with tomatoes, mozzarella, and fresh basil",
        cuisine: "Italian",
        category: "Pizza",
        cookingTime: 45,
        difficulty: "Medium",
        ingredients: ["pizza dough", "tomato sauce", "mozzarella", "fresh basil", "olive oil"],
        calories: 280,
        tags: ["vegetarian", "classic", "homemade"]
    },
    {
        id: 3,
        name: "Chicken Parmigiana",
        description: "Breaded chicken breast topped with marinara sauce and melted cheese",
        cuisine: "Italian",
        category: "Main Course",
        cookingTime: 35,
        difficulty: "Medium",
        ingredients: ["chicken breast", "breadcrumbs", "marinara sauce", "mozzarella", "parmesan"],
        calories: 520,
        tags: ["comfort food", "cheesy", "crispy"]
    },

    // Asian Cuisine
    {
        id: 4,
        name: "Chicken Teriyaki",
        description: "Glazed chicken with sweet and savory teriyaki sauce served with rice",
        cuisine: "Japanese",
        category: "Main Course",
        cookingTime: 25,
        difficulty: "Easy",
        ingredients: ["chicken thighs", "teriyaki sauce", "rice", "sesame seeds", "green onions"],
        calories: 380,
        tags: ["sweet", "savory", "rice bowl"]
    },
    {
        id: 5,
        name: "Pad Thai",
        description: "Stir-fried rice noodles with shrimp, tofu, eggs, and tamarind sauce",
        cuisine: "Thai",
        category: "Noodles",
        cookingTime: 30,
        difficulty: "Medium",
        ingredients: ["rice noodles", "shrimp", "tofu", "eggs", "tamarind paste", "fish sauce"],
        calories: 420,
        tags: ["spicy", "tangy", "street food"]
    },
    {
        id: 6,
        name: "Kung Pao Chicken",
        description: "Spicy Sichuan dish with chicken, peanuts, and chili peppers",
        cuisine: "Chinese",
        category: "Main Course",
        cookingTime: 20,
        difficulty: "Medium",
        ingredients: ["chicken breast", "peanuts", "dried chilies", "soy sauce", "rice wine"],
        calories: 400,
        tags: ["spicy", "nuts", "quick"]
    },
    {
        id: 7,
        name: "Beef Bulgogi",
        description: "Korean marinated beef grilled and served with rice and vegetables",
        cuisine: "Korean",
        category: "Main Course",
        cookingTime: 40,
        difficulty: "Medium",
        ingredients: ["beef sirloin", "soy sauce", "sesame oil", "garlic", "pear", "gochujang"],
        calories: 460,
        tags: ["marinated", "grilled", "sweet"]
    },

    // Mexican Cuisine
    {
        id: 8,
        name: "Chicken Tacos",
        description: "Soft corn tortillas filled with seasoned chicken, onions, and cilantro",
        cuisine: "Mexican",
        category: "Tacos",
        cookingTime: 25,
        difficulty: "Easy",
        ingredients: ["corn tortillas", "chicken breast", "onions", "cilantro", "lime", "cumin"],
        calories: 320,
        tags: ["street food", "fresh", "lime"]
    },
    {
        id: 9,
        name: "Beef Enchiladas",
        description: "Rolled tortillas filled with beef and topped with red sauce and cheese",
        cuisine: "Mexican",
        category: "Main Course",
        cookingTime: 45,
        difficulty: "Medium",
        ingredients: ["flour tortillas", "ground beef", "enchilada sauce", "cheese", "onions"],
        calories: 480,
        tags: ["cheesy", "saucy", "baked"]
    },
    {
        id: 10,
        name: "Guacamole",
        description: "Fresh avocado dip with lime, cilantro, and jalapeños",
        cuisine: "Mexican",
        category: "Appetizer",
        cookingTime: 10,
        difficulty: "Easy",
        ingredients: ["avocados", "lime juice", "cilantro", "jalapeños", "onions", "salt"],
        calories: 150,
        tags: ["fresh", "healthy", "dip", "vegetarian"]
    },

    // American Cuisine
    {
        id: 11,
        name: "Classic Cheeseburger",
        description: "Juicy beef patty with cheese, lettuce, tomato, and special sauce",
        cuisine: "American",
        category: "Burger",
        cookingTime: 20,
        difficulty: "Easy",
        ingredients: ["ground beef", "burger buns", "cheddar cheese", "lettuce", "tomato", "onions"],
        calories: 540,
        tags: ["comfort food", "grilled", "classic"]
    },
    {
        id: 12,
        name: "BBQ Ribs",
        description: "Slow-cooked pork ribs with tangy barbecue sauce",
        cuisine: "American",
        category: "Main Course",
        cookingTime: 180,
        difficulty: "Hard",
        ingredients: ["pork ribs", "bbq sauce", "brown sugar", "paprika", "garlic powder"],
        calories: 620,
        tags: ["smoky", "tender", "messy"]
    },
    {
        id: 13,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan",
        cuisine: "American",
        category: "Salad",
        cookingTime: 15,
        difficulty: "Easy",
        ingredients: ["romaine lettuce", "caesar dressing", "croutons", "parmesan", "anchovies"],
        calories: 250,
        tags: ["fresh", "crispy", "light"]
    },

    // Indian Cuisine
    {
        id: 14,
        name: "Chicken Tikka Masala",
        description: "Creamy tomato-based curry with marinated grilled chicken",
        cuisine: "Indian",
        category: "Curry",
        cookingTime: 50,
        difficulty: "Medium",
        ingredients: ["chicken breast", "yogurt", "tomatoes", "cream", "garam masala", "ginger"],
        calories: 450,
        tags: ["creamy", "spiced", "aromatic"]
    },
    {
        id: 15,
        name: "Vegetable Biryani",
        description: "Fragrant basmati rice layered with spiced vegetables and herbs",
        cuisine: "Indian",
        category: "Rice",
        cookingTime: 60,
        difficulty: "Hard",
        ingredients: ["basmati rice", "mixed vegetables", "saffron", "yogurt", "biryani masala"],
        calories: 380,
        tags: ["fragrant", "vegetarian", "festive"]
    },
    {
        id: 16,
        name: "Naan Bread",
        description: "Soft, pillowy Indian flatbread perfect for curries",
        cuisine: "Indian",
        category: "Bread",
        cookingTime: 30,
        difficulty: "Medium",
        ingredients: ["flour", "yogurt", "yeast", "ghee", "salt"],
        calories: 180,
        tags: ["soft", "warm", "traditional"]
    },

    // Mediterranean Cuisine
    {
        id: 17,
        name: "Greek Moussaka",
        description: "Layered casserole with eggplant, meat sauce, and béchamel",
        cuisine: "Greek",
        category: "Casserole",
        cookingTime: 90,
        difficulty: "Hard",
        ingredients: ["eggplant", "ground lamb", "béchamel sauce", "tomatoes", "cheese"],
        calories: 480,
        tags: ["layered", "rich", "traditional"]
    },
    {
        id: 18,
        name: "Hummus",
        description: "Creamy chickpea dip with tahini, lemon, and olive oil",
        cuisine: "Mediterranean",
        category: "Appetizer",
        cookingTime: 15,
        difficulty: "Easy",
        ingredients: ["chickpeas", "tahini", "lemon juice", "olive oil", "garlic"],
        calories: 120,
        tags: ["healthy", "protein", "dip", "vegan"]
    },
    {
        id: 19,
        name: "Grilled Salmon",
        description: "Fresh salmon fillet grilled with herbs and lemon",
        cuisine: "Mediterranean",
        category: "Seafood",
        cookingTime: 20,
        difficulty: "Easy",
        ingredients: ["salmon fillet", "olive oil", "lemon", "herbs", "garlic"],
        calories: 350,
        tags: ["healthy", "omega-3", "grilled"]
    },

    // French Cuisine
    {
        id: 20,
        name: "Coq au Vin",
        description: "Classic French braised chicken in red wine sauce",
        cuisine: "French",
        category: "Main Course",
        cookingTime: 75,
        difficulty: "Hard",
        ingredients: ["chicken", "red wine", "bacon", "mushrooms", "pearl onions"],
        calories: 520,
        tags: ["wine", "braised", "elegant"]
    },
    {
        id: 21,
        name: "French Onion Soup",
        description: "Rich onion soup topped with melted Gruyère cheese",
        cuisine: "French",
        category: "Soup",
        cookingTime: 60,
        difficulty: "Medium",
        ingredients: ["onions", "beef broth", "gruyère cheese", "white wine", "thyme"],
        calories: 280,
        tags: ["warm", "cheesy", "comfort"]
    },
    {
        id: 22,
        name: "Ratatouille",
        description: "Traditional Provençal vegetable stew with eggplant and zucchini",
        cuisine: "French",
        category: "Vegetable",
        cookingTime: 45,
        difficulty: "Medium",
        ingredients: ["eggplant", "zucchini", "tomatoes", "bell peppers", "herbs de provence"],
        calories: 180,
        tags: ["vegetarian", "rustic", "healthy"]
    },

    // Breakfast & Brunch
    {
        id: 23,
        name: "Eggs Benedict",
        description: "Poached eggs on English muffins with ham and hollandaise sauce",
        cuisine: "American",
        category: "Breakfast",
        cookingTime: 25,
        difficulty: "Hard",
        ingredients: ["eggs", "english muffins", "ham", "hollandaise sauce", "chives"],
        calories: 420,
        tags: ["brunch", "rich", "elegant"]
    },
    {
        id: 24,
        name: "Pancakes",
        description: "Fluffy buttermilk pancakes served with maple syrup",
        cuisine: "American",
        category: "Breakfast",
        cookingTime: 20,
        difficulty: "Easy",
        ingredients: ["flour", "buttermilk", "eggs", "baking powder", "maple syrup"],
        calories: 340,
        tags: ["fluffy", "sweet", "weekend"]
    },
    {
        id: 25,
        name: "Avocado Toast",
        description: "Toasted sourdough topped with mashed avocado and seasonings",
        cuisine: "Modern",
        category: "Breakfast",
        cookingTime: 10,
        difficulty: "Easy",
        ingredients: ["sourdough bread", "avocado", "lime", "sea salt", "red pepper flakes"],
        calories: 250,
        tags: ["healthy", "trendy", "quick", "vegetarian"]
    }
];