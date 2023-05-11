import { readFile, writeFile } from 'node:fs/promises';

const file = process.argv[2];
const newFile = process.argv[3];

try {
  const contents = await readFile(file, 'utf8');
  await writeFile(newFile, contents);
} catch (error) {
  console.log('thrown Error:', error.message);
}
