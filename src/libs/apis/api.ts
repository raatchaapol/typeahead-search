/**
 * Simple API Functions
 */

import type { DrinkResponse, MealResponse } from './types';

const ENDPOINTS = {
    DRINKS: 'https://drinksearch-bax75f4taq-uc.a.run.app',
    MEALS: 'https://mealsearch-bax75f4taq-uc.a.run.app',
};

async function apiCall<T>(url: string, signal?: AbortSignal): Promise<T> {
    const response = await fetch(url, { signal });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.success) {
        throw new Error(data.message || 'API request failed');
    }

    return data;
}

export const api = {
    searchDrinks: (query: string, signal?: AbortSignal): Promise<DrinkResponse> => {
        const url = `${ENDPOINTS.DRINKS}?find=${encodeURIComponent(query)}`;
        return apiCall<DrinkResponse>(url, signal);
    },

    searchMeals: (query: string, signal?: AbortSignal): Promise<MealResponse> => {
        const url = `${ENDPOINTS.MEALS}?find=${encodeURIComponent(query)}`;
        return apiCall<MealResponse>(url, signal);
    },
};