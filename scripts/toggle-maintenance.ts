#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, '../src/config/maintenance.ts');

// Removed unused interface - MaintenanceConfig is defined in src/config/maintenance.ts

function toggleMaintenance(): void {
  try {
    const content = fs.readFileSync(configPath, 'utf8');
    
    // Check current state by looking at the production value in the ternary
    const isEnabled = content.includes(': true,') && !content.includes(': false,');
    
    let newContent: string;
    
    if (isEnabled) {
      // Change from enabled to disabled
      newContent = content.replace(
        'enabled: import.meta.env.DEV \n    ? (import.meta.env.DEV_MAINTENANCE === \'true\')\n    : true,',
        'enabled: import.meta.env.DEV \n    ? (import.meta.env.DEV_MAINTENANCE === \'true\')\n    : false,'
      );
      console.log('✅ Maintenance mode DISABLED - your site is now live!');
    } else {
      // Change from disabled to enabled
      newContent = content.replace(
        'enabled: import.meta.env.DEV \n    ? (import.meta.env.DEV_MAINTENANCE === \'true\')\n    : false,',
        'enabled: import.meta.env.DEV \n    ? (import.meta.env.DEV_MAINTENANCE === \'true\')\n    : true,'
      );
      console.log('🔧 Maintenance mode ENABLED - visitors will see maintenance page');
    }
    
    fs.writeFileSync(configPath, newContent);
    
    console.log('\nNext steps:');
    console.log('1. Run: npm run build');
    console.log('2. Run: git add . && git commit -m "Toggle maintenance mode" && git push');
    console.log('3. Wait a few minutes for GitHub Pages to deploy');
    
  } catch (error) {
    console.error('Error toggling maintenance mode:', error);
    process.exit(1);
  }
}

toggleMaintenance();
