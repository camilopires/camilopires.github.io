// Maintenance mode configuration
export const MAINTENANCE_CONFIG = {
  // Set to true to enable maintenance mode (automatically disabled in development)
  // Override with DEV_MAINTENANCE=true to show maintenance in dev mode
  enabled: import.meta.env.DEV 
    ? (import.meta.env.DEV_MAINTENANCE === 'true')
    : false,
  
  // Optional: Add a message that will be shown on the maintenance page
  message: "I'm currently updating my website to bring you an even better experience. Please check back soon!",
  
  // Optional: Contact information to show during maintenance
  contact: {
    email: "dev@camilopires.co.uk",
    linkedin: "https://www.linkedin.com/in/camilo-pires"
  }
};
