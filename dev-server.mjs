import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
process.chdir(__dirname);

import('./node_modules/vite/bin/vite.js');
