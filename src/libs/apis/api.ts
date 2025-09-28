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
    searchDrinks: async (query: string, signal?: AbortSignal): Promise<DrinkResponse> => {
        const url = `${ENDPOINTS.DRINKS}?find=${encodeURIComponent(query)}`;
        const start = performance.now();
        const data = await apiCall<DrinkResponse>(url, signal);
        const rttMs = Math.round(performance.now() - start);
        return { ...data, executionTime: Math.max(data.executionTime ?? 0, rttMs) };
    },

    searchMeals: async (query: string, signal?: AbortSignal): Promise<MealResponse> => {
        const url = `${ENDPOINTS.MEALS}?find=${encodeURIComponent(query)}`;
        const start = performance.now();
        const data = await apiCall<MealResponse>(url, signal);
        const rttMs = Math.round(performance.now() - start);
        return { ...data, executionTime: Math.max(data.executionTime ?? 0, rttMs) };
    },
};