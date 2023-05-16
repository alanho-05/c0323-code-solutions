import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
app.use(express.json());

const noteObj = await readFile('data.json', 'utf-8');
const parsedObj = JSON.parse(noteObj);
const notesObj = parsedObj.notes;
const entryId = parsedObj.nextId;

async function write(request) {
  notesObj[entryId] = request;
  parsedObj.nextId++;
  await writeFile('data.json', JSON.stringify(parsedObj, null, 2));
}

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const obj in notesObj) {
    array.push(notesObj[obj]);
  }
  res.send(array);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id) || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id in notesObj) {
    res.send(notesObj[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.post('/api/notes', async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = entryId;
    try {
      await write(req.body);
      res.status(201).send(req.body);
    } catch (err) {
      console.error(err);
      res.status(500).end();
    }
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id) || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!(id in notesObj)) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    try {
      delete notesObj[id];
      await writeFile('data.json', JSON.stringify(parsedObj, null, 2));
      res.status(204).end();
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id) || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!(id in notesObj)) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    try {
      notesObj[id].content = req.body.content;
      await writeFile('data.json', JSON.stringify(parsedObj, null, 2));
      res.status(200).json(notesObj[id]);
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  }
});

app.listen(8080, () => {
  console.log('Listening to port 8080');
});
