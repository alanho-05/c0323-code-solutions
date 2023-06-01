import pg from 'pg';
import express from 'express';

const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    const { name, course, score } = req.body;

    if (!name || name === true || typeof name === 'number') {
      res.status(400).json({ error: 'please enter a valid name' });
      return;
    }
    if (!course || course === true || typeof course === 'number') {
      res.status(400).json({ error: 'please enter a valid course' });
      return;
    }
    if (
      !typeof score === 'number' ||
      !Number.isInteger(score) ||
      score < 0 ||
      score > 100
    ) {
      res.status(400).json({
        error:
          'please enter an integer between 0 and 100 inclusive for the score',
      });
      return;
    }

    const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
    returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const { name, course, score } = req.body;
    const id = req.params.gradeId;
    const gradeId = Number(req.params.gradeId);

    if (isNaN(gradeId) || gradeId < 0 || !Number.isInteger(gradeId)) {
      res.status(400).json({ error: `id ${id} must be a positive integer` });
      return;
    }
    if (!name || typeof name === 'number') {
      res.status(400).json({ error: 'please enter a valid name' });
      return;
    }
    if (!course || typeof course === 'number') {
      res.status(400).json({ error: 'please enter a valid course' });
      return;
    }
    if (
      !typeof score === 'number' ||
      !Number.isInteger(score) ||
      score < 0 ||
      score > 100
    ) {
      res.status(400).json({
        error:
          'please enter an integer between 0 and 100 inclusive for the score',
      });
      return;
    }

    const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "score" = $3
     where "gradeId" = $4
    returning *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    if (result.rows.length === 0) {
      res.status(404).json({
        error: `id ${id} does not exist, please enter an existing id`,
      });
      return;
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const id = req.params.gradeId;
    const gradeId = Number(req.params.gradeId);

    if (isNaN(gradeId) || !Number.isInteger(gradeId) || gradeId < 0) {
      res.status(400).json({ error: `id ${id} must be a positive integer` });
      return;
    }
    const sql = `
      delete
        from "grades"
       where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    if (result.rowCount === 0) {
      res.status(404).json({
        error: `id ${id} does not exist, please enter an existing id`,
      });
      return;
    }
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.listen(8080, () => {
  console.log('Listening to port 8080');
});
