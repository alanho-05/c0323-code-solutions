import { readFile, writeFile } from 'node:fs/promises';

const [, , file, newFile] = process.argv;

try {
  const contents = await readFile(file);
  await writeFile(newFile, contents);
} catch (error) {
  console.log('thrown Error:', error.message);
}
