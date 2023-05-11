import { readFile } from 'node:fs/promises';

const array = process.argv.slice(2);
const map = array.map((txt) => readFile(txt, 'utf8'));

async function text(fileName) {
  try {
    const textEntries = await Promise.all(fileName);
    textEntries.forEach((entry) => console.log(entry));
  } catch (error) {
    console.log('throw Error:', error);
  }
}

await text(map);
