/** 
 * An array of public routes that can be accessed without authentication.
 * These routes don't require a user to be authenticated.
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
];

/**
 * An array of protected routes that can only be accessed by authenticated users.
 * These routes will redirect logged in users to /settings.
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
];

/**
 * The Prefix for the API authentification routes.
 * Routes that start with this prefix are used for 
 API authentication purposes.
 * @^type {string}
*/
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect route after logged in
 * @type {string}
*/
export const DEFAULT_LOGIN_REDIRECT = "/settings";