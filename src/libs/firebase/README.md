# Firebase Configuration

## Overview

This directory contains the Firebase configuration and setup for the application. The configuration follows security best practices by using environment variables instead of hardcoded credentials.

## Files

- `configs.ts` - Main Firebase configuration export
- `envValidation.ts` - Environment variable validation utilities
- `firebase.ts` - Firebase app initialization

## Environment Setup

### 1. Copy Environment Template
```bash
cp .env.example .env.local
```

### 2. Configure Environment Variables
Edit `.env.local` with your actual Firebase project credentials:

```env
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Security Features

- ✅ Environment variables are gitignored (`.env.local` is in `.gitignore`)
- ✅ TypeScript validation for environment variables
- ✅ Runtime validation with helpful error messages
- ✅ Template file (`.env.example`) for team setup
- ✅ No hardcoded credentials in source code

## Usage

```typescript
import { firebaseConfig } from 'libs/firebase/configs';
// Configuration is automatically validated and loaded
```

## Environment Variable Validation

The configuration includes automatic validation that ensures all required Firebase environment variables are present. If any are missing, a descriptive error will be thrown with guidance on how to fix the issue.

## Production Deployment

For production deployments, ensure that all environment variables are properly configured in your deployment environment:

- Vercel: Add environment variables in project settings
- Netlify: Add environment variables in site settings
- Docker: Use environment files or container environment variables

## Security Notes

- Never commit `.env.local` or any file containing actual credentials
- Use different Firebase projects for development, staging, and production
- Regularly rotate API keys and update environment variables
- Monitor Firebase console for unauthorized usage