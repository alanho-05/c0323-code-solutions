import { readFile } from 'node:fs/promises';

async function text(fileName) {
  try {
    const filePath = new URL(fileName, import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}

await text(process.argv[2]);
