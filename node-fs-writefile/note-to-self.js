import { writeFile } from 'node:fs/promises';

try {
  const content = process.argv[2];
  await writeFile('note.txt', content + '\n');
} catch (error) {
  console.log('thrown Error:', error.message);
}
