import express from 'express';

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

const app = express();

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const obj in grades) {
    array.push(grades[obj]);
  }
  res.json(array);
});

app.delete('/api/grades/:id', (req, res) => {
  if (!(req.params.id in grades)) {
    res.status(400).send('id does not exist, please enter a valid id.');
  } else {
    delete grades[req.params.id];
    res.sendStatus(204);
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
