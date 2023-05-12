import { writeFile } from 'node:fs/promises';

try {
  const content = Math.random();
  await writeFile('random.txt', content + '\n', 'utf8');
} catch (err) {
  console.log('thrown Error:', err.message);
}
