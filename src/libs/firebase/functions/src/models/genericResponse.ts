/**
 * Generic API Response Model for Firebase Cloud Functions
 * Provides consistent response structure for all endpoints
 * 
 * @example Successful search response:
 * ```json
 * {
 *   "success": true,
 *   "data": [
 *     {
 *       "id": 1,
 *       "name": "Old Fashioned",
 *       "description": "Classic whiskey cocktail...",
 *       "category": "Cocktail",
 *       "difficulty": "Medium",
 *       "ingredients": ["bourbon whiskey", "sugar cube"],
 *       "calories": 180,
 *       "tags": ["classic", "strong"]
 *     }
 *   ],
 *   "message": "Found 1 result for \"whiskey\"",
 *   "timestamp": "2024-01-15T10:30:00.000Z",
 *   "count": 1,
 *   "query": "whiskey",
 *   "executionTime": 15
 * }
 * ```
 * 
 * @example Error response:
 * ```json
 * {
 *   "success": false,
 *   "data": null,
 *   "message": "Query parameter 'find' is required",
 *   "timestamp": "2024-01-15T10:30:00.000Z",
 *   "count": 0,
 *   "error": {
 *     "code": "MISSING_QUERY_PARAMETER",
 *     "details": "Additional error context"
 *   }
 * }
 * ```
 */

export interface ApiResponse<T = any> {
    /** Indicates if the request was successful */
    success: boolean;
    
    /** Response data payload */
    data: T;
    
    /** Human-readable message */
    message: string;
    
    /** Response timestamp in ISO format */
    timestamp: string;
    
    /** Total count of items (useful for pagination/search results) */
    count: number;
    
    /** Error details (only present when success = false) */
    error?: {
        code: string;
        details?: string;
    };
}

/**
 * Success response factory function
 * @param data - Response payload
 * @param message - Success message
 * @param count - Total count of items
 */
export function createSuccessResponse<T>(
    data: T,
    message: string = 'Request completed successfully',
    count?: number
): ApiResponse<T> {
    return {
        success: true,
        data,
        message,
        timestamp: new Date().toISOString(),
        count: count ?? (Array.isArray(data) ? data.length : 1)
    };
}

/**
 * Error response factory function
 * @param message - Error message
 * @param errorCode - Error code
 * @param errorDetails - Additional error details
 */
export function createErrorResponse(
    message: string,
    errorCode: string = 'INTERNAL_ERROR',
    errorDetails?: string
): ApiResponse<null> {
    return {
        success: false,
        data: null,
        message,
        timestamp: new Date().toISOString(),
        count: 0,
        error: {
            code: errorCode,
            details: errorDetails
        }
    };
}

/**
 * Search-specific response interface
 * Extends the base ApiResponse with search metadata
 */
export interface SearchResponse<T> extends ApiResponse<T[]> {
    /** Search query that was executed */
    query: string;
    
    /** Search execution time in milliseconds */
    executionTime: number;
}

/**
 * Search response factory function
 * @param data - Search results array
 * @param query - Search query
 * @param executionTime - Execution time in ms
 * @param message - Response message
 */
export function createSearchResponse<T>(
    data: T[],
    query: string,
    executionTime: number,
    message?: string
): SearchResponse<T> {
    const defaultMessage = data.length > 0 
        ? `Found ${data.length} result${data.length === 1 ? '' : 's'} for "${query}"`
        : `No results found for "${query}"`;

    return {
        success: true,
        data,
        message: message ?? defaultMessage,
        timestamp: new Date().toISOString(),
        count: data.length,
        query,
        executionTime
    };
}
