import { onRequest } from "firebase-functions/https";
import { type Meal, mealList } from "../constants/meals";
import { createSearchResponse, createErrorResponse, type SearchResponse } from "../models/genericResponse";

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
    // Set CORS headers
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (request.method === 'OPTIONS') {
        response.status(204).send('');
        return;
    }

    try {
        const startTime = Date.now();
        const query = request.query?.find as string;

        // Validate query parameter
        if (!query) {
            const errorResponse = createErrorResponse(
                "Query parameter 'find' is required",
                "MISSING_QUERY_PARAMETER"
            );
            response.status(400).json(errorResponse);
            return;
        }

        const meals = await getMeals(query);
        const executionTime = Date.now() - startTime;

        const searchResponse: SearchResponse<Meal> = createSearchResponse(
            meals,
            query,
            executionTime
        );

        response.json(searchResponse);
    } catch (error) {
        const errorResponse = createErrorResponse(
            "Internal server error occurred while searching meals",
            "INTERNAL_ERROR",
            error instanceof Error ? error.message : "Unknown error"
        );

        response.status(500).json(errorResponse);
    }
});
