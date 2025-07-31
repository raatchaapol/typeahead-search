export interface Drink {
    id: number;
    name: string;
    description: string;
    category: string;
    type: 'Alcoholic' | 'Non-Alcoholic' | 'Hot' | 'Cold';
    preparationTime: number; // in minutes
    difficulty: 'Easy' | 'Medium' | 'Hard';
    ingredients: string[];
    calories: number;
    tags: string[];
    glassType?: string;
    garnish?: string;
}

export const drinkList: Drink[] = [
    // Classic Cocktails
    {
        id: 1,
        name: "Old Fashioned",
        description: "Classic whiskey cocktail with sugar, bitters, and orange twist",
        category: "Cocktail",
        type: "Alcoholic",
        preparationTime: 5,
        difficulty: "Medium",
        ingredients: ["bourbon whiskey", "sugar cube", "angostura bitters", "orange peel"],
        calories: 180,
        tags: ["classic", "strong", "sophisticated"],
        glassType: "Old Fashioned glass",
        garnish: "Orange peel"
    },
    {
        id: 2,
        name: "Margarita",
        description: "Tequila-based cocktail with lime juice and orange liqueur",
        category: "Cocktail",
        type: "Alcoholic",
        preparationTime: 3,
        difficulty: "Easy",
        ingredients: ["tequila", "triple sec", "lime juice", "salt rim"],
        calories: 220,
        tags: ["citrusy", "refreshing", "party"],
        glassType: "Margarita glass",
        garnish: "Lime wheel"
    },
    {
        id: 3,
        name: "Mojito",
        description: "Cuban cocktail with white rum, mint, lime, and soda water",
        category: "Cocktail",
        type: "Alcoholic",
        preparationTime: 4,
        difficulty: "Medium",
        ingredients: ["white rum", "fresh mint", "lime juice", "sugar", "soda water"],
        calories: 160,
        tags: ["refreshing", "minty", "summer"],
        glassType: "Highball glass",
        garnish: "Fresh mint sprig"
    },
    {
        id: 4,
        name: "Espresso Martini",
        description: "Vodka cocktail with fresh espresso and coffee liqueur",
        category: "Cocktail",
        type: "Alcoholic",
        preparationTime: 3,
        difficulty: "Medium",
        ingredients: ["vodka", "espresso", "coffee liqueur", "simple syrup"],
        calories: 190,
        tags: ["caffeinated", "sophisticated", "evening"],
        glassType: "Martini glass",
        garnish: "Coffee beans"
    },
    {
        id: 5,
        name: "Manhattan",
        description: "Classic whiskey cocktail with sweet vermouth and bitters",
        category: "Cocktail",
        type: "Alcoholic",
        preparationTime: 3,
        difficulty: "Easy",
        ingredients: ["rye whiskey", "sweet vermouth", "angostura bitters"],
        calories: 170,
        tags: ["classic", "strong", "elegant"],
        glassType: "Coupe glass",
        garnish: "Maraschino cherry"
    },

    // Wine & Champagne
    {
        id: 6,
        name: "Sangria",
        description: "Spanish punch with red wine, fruit, and brandy",
        category: "Wine Cocktail",
        type: "Alcoholic",
        preparationTime: 15,
        difficulty: "Easy",
        ingredients: ["red wine", "brandy", "orange juice", "mixed fruit", "sugar"],
        calories: 140,
        tags: ["fruity", "party", "refreshing"],
        glassType: "Wine glass",
        garnish: "Fresh fruit"
    },
    {
        id: 7,
        name: "Mimosa",
        description: "Champagne cocktail with orange juice",
        category: "Champagne Cocktail",
        type: "Alcoholic",
        preparationTime: 1,
        difficulty: "Easy",
        ingredients: ["champagne", "orange juice"],
        calories: 120,
        tags: ["brunch", "light", "celebratory"],
        glassType: "Champagne flute",
        garnish: "Orange slice"
    },
    {
        id: 8,
        name: "Bellini",
        description: "Venetian cocktail with Prosecco and peach purée",
        category: "Champagne Cocktail",
        type: "Alcoholic",
        preparationTime: 3,
        difficulty: "Easy",
        ingredients: ["prosecco", "peach purée", "simple syrup"],
        calories: 110,
        tags: ["sweet", "elegant", "brunch"],
        glassType: "Champagne flute",
        garnish: "Peach slice"
    },

    // Beer & Cider
    {
        id: 9,
        name: "Michelada",
        description: "Mexican beer cocktail with lime, spices, and tomato juice",
        category: "Beer Cocktail",
        type: "Alcoholic",
        preparationTime: 3,
        difficulty: "Easy",
        ingredients: ["light beer", "lime juice", "worcestershire sauce", "hot sauce", "tomato juice"],
        calories: 130,
        tags: ["savory", "spicy", "refreshing"],
        glassType: "Pint glass",
        garnish: "Lime wedge"
    },
    {
        id: 10,
        name: "Shandy",
        description: "Refreshing mix of beer and lemonade",
        category: "Beer Cocktail",
        type: "Alcoholic",
        preparationTime: 1,
        difficulty: "Easy",
        ingredients: ["light beer", "lemonade"],
        calories: 100,
        tags: ["light", "refreshing", "summer"],
        glassType: "Pint glass",
        garnish: "Lemon slice"
    },

    // Non-Alcoholic Cocktails
    {
        id: 11,
        name: "Virgin Mojito",
        description: "Non-alcoholic version with mint, lime, and soda water",
        category: "Mocktail",
        type: "Non-Alcoholic",
        preparationTime: 3,
        difficulty: "Easy",
        ingredients: ["fresh mint", "lime juice", "sugar", "soda water"],
        calories: 40,
        tags: ["refreshing", "minty", "healthy"],
        glassType: "Highball glass",
        garnish: "Fresh mint sprig"
    },
    {
        id: 12,
        name: "Shirley Temple",
        description: "Sweet non-alcoholic drink with ginger ale and grenadine",
        category: "Mocktail",
        type: "Non-Alcoholic",
        preparationTime: 2,
        difficulty: "Easy",
        ingredients: ["ginger ale", "grenadine", "maraschino cherry"],
        calories: 90,
        tags: ["sweet", "kid-friendly", "classic"],
        glassType: "Highball glass",
        garnish: "Maraschino cherry"
    },
    {
        id: 13,
        name: "Arnold Palmer",
        description: "Half iced tea, half lemonade",
        category: "Mocktail",
        type: "Non-Alcoholic",
        preparationTime: 2,
        difficulty: "Easy",
        ingredients: ["iced tea", "lemonade"],
        calories: 60,
        tags: ["refreshing", "classic", "summer"],
        glassType: "Tall glass",
        garnish: "Lemon slice"
    },

    // Fresh Juices & Smoothies
    {
        id: 14,
        name: "Green Smoothie",
        description: "Healthy blend of spinach, banana, apple, and coconut water",
        category: "Smoothie",
        type: "Non-Alcoholic",
        preparationTime: 5,
        difficulty: "Easy",
        ingredients: ["spinach", "banana", "green apple", "coconut water", "honey"],
        calories: 120,
        tags: ["healthy", "green", "energizing"],
        glassType: "Tall glass",
        garnish: "Mint leaves"
    },
    {
        id: 15,
        name: "Tropical Smoothie",
        description: "Exotic blend of mango, pineapple, and coconut milk",
        category: "Smoothie",
        type: "Non-Alcoholic",
        preparationTime: 4,
        difficulty: "Easy",
        ingredients: ["mango", "pineapple", "coconut milk", "banana", "ice"],
        calories: 180,
        tags: ["tropical", "creamy", "sweet"],
        glassType: "Tall glass",
        garnish: "Pineapple wedge"
    },
    {
        id: 16,
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice",
        category: "Fresh Juice",
        type: "Non-Alcoholic",
        preparationTime: 5,
        difficulty: "Easy",
        ingredients: ["fresh oranges"],
        calories: 110,
        tags: ["fresh", "vitamin c", "breakfast"],
        glassType: "Juice glass",
        garnish: "Orange slice"
    },

    // Hot Beverages
    {
        id: 17,
        name: "Espresso",
        description: "Strong concentrated coffee shot",
        category: "Coffee",
        type: "Hot",
        preparationTime: 2,
        difficulty: "Medium",
        ingredients: ["espresso beans", "water"],
        calories: 5,
        tags: ["strong", "concentrated", "energizing"],
        glassType: "Espresso cup"
    },
    {
        id: 18,
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        category: "Coffee",
        type: "Hot",
        preparationTime: 4,
        difficulty: "Medium",
        ingredients: ["espresso", "steamed milk", "milk foam"],
        calories: 80,
        tags: ["creamy", "coffee", "morning"],
        glassType: "Cappuccino cup",
        garnish: "Cocoa powder"
    },
    {
        id: 19,
        name: "Chai Latte",
        description: "Spiced tea with steamed milk",
        category: "Tea",
        type: "Hot",
        preparationTime: 6,
        difficulty: "Easy",
        ingredients: ["chai tea", "steamed milk", "cinnamon", "cardamom", "ginger"],
        calories: 120,
        tags: ["spiced", "warming", "comforting"],
        glassType: "Mug",
        garnish: "Cinnamon stick"
    },
    {
        id: 20,
        name: "Hot Chocolate",
        description: "Rich chocolate drink with steamed milk",
        category: "Hot Beverage",
        type: "Hot",
        preparationTime: 5,
        difficulty: "Easy",
        ingredients: ["dark chocolate", "milk", "sugar", "vanilla"],
        calories: 190,
        tags: ["sweet", "comforting", "winter"],
        glassType: "Mug",
        garnish: "Whipped cream"
    },
    {
        id: 21,
        name: "Matcha Latte",
        description: "Japanese green tea powder with steamed milk",
        category: "Tea",
        type: "Hot",
        preparationTime: 4,
        difficulty: "Medium",
        ingredients: ["matcha powder", "steamed milk", "honey"],
        calories: 70,
        tags: ["antioxidant", "earthy", "energizing"],
        glassType: "Mug",
        garnish: "Matcha powder dusting"
    },

    // Iced Beverages
    {
        id: 22,
        name: "Iced Coffee",
        description: "Cold brewed coffee served over ice",
        category: "Coffee",
        type: "Cold",
        preparationTime: 3,
        difficulty: "Easy",
        ingredients: ["cold brew coffee", "ice", "milk"],
        calories: 15,
        tags: ["refreshing", "coffee", "summer"],
        glassType: "Tall glass",
        garnish: "Coffee beans"
    },
    {
        id: 23,
        name: "Iced Tea",
        description: "Refreshing cold tea with lemon",
        category: "Tea",
        type: "Cold",
        preparationTime: 5,
        difficulty: "Easy",
        ingredients: ["black tea", "water", "sugar", "lemon"],
        calories: 50,
        tags: ["refreshing", "classic", "summer"],
        glassType: "Tall glass",
        garnish: "Lemon wedge"
    },
    {
        id: 24,
        name: "Bubble Tea",
        description: "Taiwanese tea drink with tapioca pearls",
        category: "Tea",
        type: "Cold",
        preparationTime: 10,
        difficulty: "Medium",
        ingredients: ["black tea", "milk", "tapioca pearls", "sugar syrup"],
        calories: 250,
        tags: ["chewy", "sweet", "trendy"],
        glassType: "Tall glass",
        garnish: "Wide straw"
    },

    // Specialty Drinks
    {
        id: 25,
        name: "Kombucha",
        description: "Fermented tea drink with probiotics",
        category: "Fermented",
        type: "Non-Alcoholic",
        preparationTime: 1,
        difficulty: "Easy",
        ingredients: ["fermented tea", "natural flavors"],
        calories: 30,
        tags: ["probiotic", "healthy", "tangy"],
        glassType: "Bottle"
    },
    {
        id: 26,
        name: "Coconut Water",
        description: "Natural electrolyte-rich drink from young coconuts",
        category: "Natural",
        type: "Non-Alcoholic",
        preparationTime: 1,
        difficulty: "Easy",
        ingredients: ["fresh coconut water"],
        calories: 45,
        tags: ["natural", "hydrating", "electrolytes"],
        glassType: "Glass"
    },
    {
        id: 27,
        name: "Energy Drink",
        description: "Caffeinated beverage for energy boost",
        category: "Energy",
        type: "Non-Alcoholic",
        preparationTime: 1,
        difficulty: "Easy",
        ingredients: ["caffeine", "taurine", "B vitamins", "sugar"],
        calories: 110,
        tags: ["energizing", "caffeinated", "sports"],
        glassType: "Can"
    },
    {
        id: 28,
        name: "Protein Shake",
        description: "Muscle-building drink with protein powder",
        category: "Protein",
        type: "Non-Alcoholic",
        preparationTime: 3,
        difficulty: "Easy",
        ingredients: ["protein powder", "milk", "banana", "peanut butter"],
        calories: 280,
        tags: ["protein", "fitness", "filling"],
        glassType: "Shaker bottle"
    },

    // International Drinks
    {
        id: 29,
        name: "Turkish Coffee",
        description: "Traditional unfiltered coffee with fine grounds",
        category: "Coffee",
        type: "Hot",
        preparationTime: 8,
        difficulty: "Hard",
        ingredients: ["finely ground coffee", "water", "sugar"],
        calories: 20,
        tags: ["traditional", "strong", "cultural"],
        glassType: "Small cup",
        garnish: "Turkish delight"
    },
    {
        id: 30,
        name: "Lassi",
        description: "Indian yogurt-based drink with mango",
        category: "Yogurt Drink",
        type: "Non-Alcoholic",
        preparationTime: 5,
        difficulty: "Easy",
        ingredients: ["yogurt", "mango", "cardamom", "sugar", "ice"],
        calories: 150,
        tags: ["creamy", "probiotic", "Indian"],
        glassType: "Tall glass",
        garnish: "Mint leaves"
    }
];
