import { onRequest } from "firebase-functions/https";
import { type Meal, mealList } from "../constants/meals";

async function getMeals(query?: string): Promise<Meal[]> {
    if (!query || query.trim() === "") {
        return [] as Meal[];
    }

    const searchQuery = query.toLowerCase();

    return mealList.filter(meal =>
        meal.name.toLowerCase().includes(searchQuery) ||
        meal.description.toLowerCase().includes(searchQuery) ||
        meal.cuisine.toLowerCase().includes(searchQuery) ||
        meal.category.toLowerCase().includes(searchQuery) ||
        meal.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
        meal.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQuery))
    );
}

export const mealSearch = onRequest(async (request, response) => {
    const query = request.query?.find as string;
    const meals = await getMeals(query);

    response.send(meals);
});
