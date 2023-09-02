interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: Rating;
  ratingDescription: RatingDescription;
  target: number;
  average: number;
}

export interface ExerciseInputValues {
  daily_exercises: number[];
  target: number;
}

type Rating = 1 | 2 | 3;
type RatingDescription = 'you can do better than this...' | 'it\'s ok' | 'you\'re on fire!';

interface RatingResult {
  rating: Rating;
  ratingDescription: RatingDescription;
}

const parseExerciseArguments = (args: string[]): ExerciseInputValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  const target = Number(args[2]);

  if (isNaN(target)) {
    throw new Error('Target must be number!');
  }
  const daily_exercises = args.slice(3).map(input => {
    const hours = Number(input);
    if (isNaN(hours)) {
      throw new Error('Provided values were not numbers!');
    }
    return hours;
  });
  return { daily_exercises, target };
};


const ratingCalculator = (average: number, target: number): RatingResult => {
  if (average < target - 1) {
    return {
      rating: 1,
      ratingDescription: 'you can do better than this...',
    };
  }
  if (average > target + 1) {
    return {
      rating: 3,
      ratingDescription: 'you\'re on fire!',
    };
  }
  return {
      rating: 2,
      ratingDescription: 'it\'s ok',
    };
};

export const calculateExercises = (exerciseHours: number[], target: number): Result => {
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.reduce((count, hours) => count + (hours > 0 ? 1 : 0), 0);
  const totalhours = exerciseHours.reduce((a, b) => a + b, 0);
  const average = totalhours / periodLength;
  const { rating, ratingDescription } = ratingCalculator(average, target);
  return {
    periodLength,
    trainingDays,
    success: average >= target,
    rating,
    ratingDescription,
    target,
    average,
  };
};

try {
  const { daily_exercises, target } = parseExerciseArguments(process.argv);
  const result = calculateExercises(daily_exercises, target);
  console.log(result);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}