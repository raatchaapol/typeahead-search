import { onRequest } from "firebase-functions/https";
import { type Drink, drinkList } from "../constants/drinks";
import { createSearchResponse, createErrorResponse, type SearchResponse } from "../models/genericResponse";

async function getDrinks(query?: string): Promise<Drink[]> {
    if (!query || query.trim() === "") {
        return [] as Drink[];
    }

    const searchQuery = query.toLowerCase();

    return drinkList.filter(drink =>
        drink.name.toLowerCase().includes(searchQuery) ||
        drink.description.toLowerCase().includes(searchQuery) ||
        drink.category.toLowerCase().includes(searchQuery) ||
        drink.type.toLowerCase().includes(searchQuery) ||
        drink.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
        drink.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQuery))
    );
}

export const drinkSearch = onRequest(async (request, response) => {
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

        const drinks = await getDrinks(query);
        const executionTime = Date.now() - startTime;

        const searchResponse: SearchResponse<Drink> = createSearchResponse(
            drinks,
            query,
            executionTime
        );

        response.json(searchResponse);
    } catch (error) {
        const errorResponse = createErrorResponse(
            "Internal server error occurred while searching drinks",
            "INTERNAL_ERROR",
            error instanceof Error ? error.message : "Unknown error"
        );

        response.status(500).json(errorResponse);
    }
});
