/**
 * Vercel Serverless Function Entry Point
 * This file handles all requests for Vercel deployment
 */

// Import and export the Express app
const app = require('../server');

// Export for Vercel
module.exports = app;
