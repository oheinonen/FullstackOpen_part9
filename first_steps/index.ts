import express from 'express';
import { Request } from 'express';
import { parse } from 'qs';
import { calculateExercises, ExerciseInputValues} from './exerciseCalculator';
import { calculateBmi } from './calculateBmi';

type ExerciseRequest = Request & { body: ExerciseInputValues };

interface BmiQueryParams {
  height: string;
  weight: string;
}

const app = express();

app.use(express.json());

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

app.post('/exercises', (req: ExerciseRequest, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  console.log(daily_exercises, target);
  if (!daily_exercises || !target) {
    res.status(400).send({ error: 'parameters missing'});
  }
  const convertedHours = (daily_exercises as number[]).map((item) => Number(item));
  const convertedTarget = Number(target);

  if (convertedHours.some(isNaN) || isNaN(convertedTarget)) {
    res.status(400).send({ error: 'malformatted parameters' });
  }

  const result = calculateExercises(convertedHours, convertedTarget);
  res.send(result);
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});