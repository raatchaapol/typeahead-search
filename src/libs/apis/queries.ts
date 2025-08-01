/**
 * TanStack Query Hooks
 */

import { useQuery } from '@tanstack/react-query';
import { api } from './api';

// Query Keys
export const queryKeys = {
    drinks: (query: string) => ['drinks', query] as const,
    meals: (query: string) => ['meals', query] as const,
    combined: (query: string) => ['combined', query] as const,
};

// Drink Hooks
export function useDrinkSearch(query: string, enabled = true) {
    return useQuery({
        queryKey: queryKeys.drinks(query),
        queryFn: ({ signal }) => api.searchDrinks(query, signal),
        enabled: enabled && query.trim().length > 0,
        staleTime: 60 * 1000, // 1 minute
    });
}

// Meal Hooks  
export function useMealSearch(query: string, enabled = true) {
    return useQuery({
        queryKey: queryKeys.meals(query),
        queryFn: ({ signal }) => api.searchMeals(query, signal),
        enabled: enabled && query.trim().length > 0,
        staleTime: 60 * 1000, // 1 minute
    });
}

// Combined Search Hook - searches both drinks and meals with race condition handling
export function useCombinedSearch(query: string, enabled = true) {
    const drinkQuery = useQuery({
        queryKey: queryKeys.drinks(query),
        queryFn: ({ signal }) => api.searchDrinks(query, signal),
        enabled: enabled && query.trim().length > 0,
        staleTime: 60 * 1000,
    });

    const mealQuery = useQuery({
        queryKey: queryKeys.meals(query),
        queryFn: ({ signal }) => api.searchMeals(query, signal),
        enabled: enabled && query.trim().length > 0,
        staleTime: 60 * 1000,
    });

    return {
        drinks: drinkQuery,
        meals: mealQuery,
        // Combined loading state - true if either is loading
        isLoading: drinkQuery.isLoading || mealQuery.isLoading,
        // Combined error state - show if either has error
        error: drinkQuery.error || mealQuery.error,
        // Both completed successfully
        isSuccess: drinkQuery.isSuccess && mealQuery.isSuccess,
        // Combined data with race condition safety
        data: {
            drinks: drinkQuery.data?.data || [],
            meals: mealQuery.data?.data || [],
            totalCount: (drinkQuery.data?.count || 0) + (mealQuery.data?.count || 0),
            executionTime: Math.max(
                drinkQuery.data?.executionTime || 0,
                mealQuery.data?.executionTime || 0
            ),
            query: query,
        }
    };
}