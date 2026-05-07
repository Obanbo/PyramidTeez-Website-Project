import { access, readFile } from 'node:fs/promises';

const requiredFiles = ['index.html', 'styles.css'];

await Promise.all(requiredFiles.map((file) => access(file)));

const html = await readFile('index.html', 'utf8');
const requiredAnchors = ['home', 'about', 'services', 'apparel', 'flyers', 'contact'];
const missingAnchors = requiredAnchors.filter((anchor) => !html.includes(`id="${anchor}"`));

if (missingAnchors.length > 0) {
  throw new Error(`Missing required page sections: ${missingAnchors.join(', ')}`);
}

console.log('Static Pyramid Teez site validation passed.');
