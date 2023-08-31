import express from 'express';
import { calculateBmi } from './calculateBmi';
import { parse } from 'qs';

interface BmiQueryParams {
  height: string;
  weight: string;
}

const app = express();

app.set('query parser', (str: string) => parse(str, {}) as unknown as BmiQueryParams);

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const  { height, weight } = req.query;
  if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
    res.status(400).send({ error: "malformatted parameters" });
  }

  const typedHeight = Number(height);
  const typedWeight = Number(weight);

  const bmi = calculateBmi(typedHeight, typedWeight);
  res.send({ height: typedHeight, weight: typedWeight, bmi });
});
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});