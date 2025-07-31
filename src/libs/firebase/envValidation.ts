/**
 * Validates that all required Firebase environment variables are present
 * @throws Error if any required environment variable is missing
 */
export function validateFirebaseEnv(): void {
    const requiredEnvVars = [
        'VITE_FIREBASE_API_KEY',
        'VITE_FIREBASE_AUTH_DOMAIN',
        'VITE_FIREBASE_PROJECT_ID',
        'VITE_FIREBASE_STORAGE_BUCKET',
        'VITE_FIREBASE_MESSAGING_SENDER_ID',
        'VITE_FIREBASE_APP_ID'
    ] as const;

    const missingVars = requiredEnvVars.filter(
        (varName) => !import.meta.env[varName]
    );

    if (missingVars.length > 0) {
        throw new Error(
            `Missing required Firebase environment variables: ${missingVars.join(', ')}\n` +
            'Please ensure your .env.local file is properly configured with all Firebase credentials.'
        );
    }
}

/**
 * Gets all Firebase environment variables with validation
 * @returns Object containing all Firebase environment variables
 */
export function getFirebaseEnv() {
    validateFirebaseEnv();

    return {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID
    };
}