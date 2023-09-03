import { useState } from 'react';
import diaryService from '../services/diaries';
import ErrorNotification from './ErrorNotification';
import { Weather, Visibility } from '../types';

const DiaryForm = () => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState(Weather.Sunny);
  const [visibility, setVisibility] = useState(Visibility.Great);
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState<string|null>(null)

  const notify = (message: string) => {
    setErrorMessage(message)
    console.log(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const diaryCreation = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const diaryToAdd = {
      date,
      visibility,
      weather,
      comment,
    };
    const result = await diaryService.addDiary(diaryToAdd);
    if (typeof result === 'string') {
      notify(result);
    } else {
      setDate('');
      setVisibility(Visibility.Great);
      setWeather(Weather.Sunny);
      setComment('');
    }
  };
  return (
    <div>
      <h2>Add new diary</h2>
      { errorMessage && <ErrorNotification errorMessage={errorMessage}/>}
      <form onSubmit={diaryCreation}>
        <p>
          date
          <input
            type="date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
            }}/>
        </p>
        <p>
        visibility {Object.values(Visibility).map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={visibility === option}
              onChange={(event) => {
                setVisibility(event.target.value as Visibility);
              }}
            />
            {option}
          </label>
        ))}

        </p>
        <p>
        weather {Object.values(Weather).map((weatherOption) => (
          <label key={weatherOption}>
            <input
              type="radio"
              value={weatherOption}
              checked={weather === weatherOption}
              onChange={(event) => {
                setWeather(event.target.value as Weather);
              }}
            />
            {weatherOption}
          </label>
        ))}
        </p>
        <p>
        comment<input value={comment} onChange={(event) => {
          setComment(event.target.value);
        }} />
        </p>
          <button type='submit'>add</button>
      </form>
    </div>
  );
};
export default DiaryForm;