import express from 'express';

const app = express();
app.use(express.json());

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const array = [];
  if (Object.keys(grades).length === 0) {
    res.status(400).send('Currently no grades stored, please submit a grade.');
  } else {
    for (const obj in grades) {
      array.push(grades[obj]);
    }
    res.send(array);
  }
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).send(req.body);
});

app.listen(8080, () => {
  console.log('Listening to port 8080!');
});
