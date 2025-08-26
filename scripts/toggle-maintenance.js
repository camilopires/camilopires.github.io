#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, '../src/config/maintenance.ts');

function toggleMaintenance() {
  try {
    let content = fs.readFileSync(configPath, 'utf8');
    
    // Check current state
    const isEnabled = content.includes('enabled: true');
    
    // Toggle the value
    if (isEnabled) {
      content = content.replace('enabled: true', 'enabled: false');
      console.log('✅ Maintenance mode DISABLED - your site is now live!');
    } else {
      content = content.replace('enabled: false', 'enabled: true');
      console.log('🔧 Maintenance mode ENABLED - visitors will see maintenance page');
    }
    
    fs.writeFileSync(configPath, content);
    
    console.log('\nNext steps:');
    console.log('1. Run: npm run build');
    console.log('2. Run: git add . && git commit -m "Toggle maintenance mode" && git push');
    console.log('3. Wait a few minutes for GitHub Pages to deploy');
    
  } catch (error) {
    console.error('Error toggling maintenance mode:', error);
  }
}

toggleMaintenance();
