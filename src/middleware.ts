import { defineMiddleware } from 'astro:middleware';
import { MAINTENANCE_CONFIG } from './config/maintenance';

export const onRequest = defineMiddleware(async (context, next) => {
  // If maintenance mode is enabled and not already on maintenance page
  if (MAINTENANCE_CONFIG.enabled && context.url.pathname !== '/maintenance') {
    // Redirect to maintenance page
    return context.redirect('/maintenance');
  }
  
  // If maintenance mode is disabled and on maintenance page, redirect to home
  if (!MAINTENANCE_CONFIG.enabled && context.url.pathname === '/maintenance') {
    return context.redirect('/');
  }
  
  // Continue with normal request
  return next();
});
