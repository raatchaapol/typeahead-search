/**
 * Simple API Types
 */

// Firebase Cloud Function Response Structure
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message: string;
    timestamp: string;
    count: number;
    query: string;
    executionTime: number;
    error?: {
        code: string;
        details?: string;
    };
}

// Domain Models
export interface Drink {
    id: number;
    name: string;
    description: string;
    category: string;
    type: 'Alcoholic' | 'Non-Alcoholic' | 'Hot' | 'Cold';
    preparationTime: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    ingredients: string[];
    calories: number;
    tags: string[];
    glassType?: string;
    garnish?: string;
}

export interface Meal {
    id: number;
    name: string;
    description: string;
    cuisine: string;
    category: string;
    cookingTime: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    ingredients: string[];
    calories: number;
    tags: string[];
}

// API Response Types
export type DrinkResponse = ApiResponse<Drink[]>;
export type MealResponse = ApiResponse<Meal[]>;