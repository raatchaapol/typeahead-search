import { onRequest } from "firebase-functions/https";
import { type Drink, drinkList } from "../constants/drinks";

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
    const query = request.query?.find as string;
    const drinks = await getDrinks(query);

    response.send(drinks);
});
