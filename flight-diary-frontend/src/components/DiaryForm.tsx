import { useState } from 'react';
import diaryService from '../services/diaries';
import ErrorNotification from './ErrorNotification';

const DiaryForm = () => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState('');
  const [visibility, setVisibility] = useState('');
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
      setVisibility('');
      setWeather('');
      setComment('');
    }
  };
  return (
    <div>
      <h2>Add new diary</h2>
      { errorMessage && <ErrorNotification errorMessage={errorMessage}/>}
      <form onSubmit={diaryCreation}>
        <p>
        date<input value={date} onChange={(event) => {
          setDate(event.target.value);
        }} />
        </p>
        <p>
        visibility<input value={visibility} onChange={(event) => {
          setVisibility(event.target.value);
        }} />
        </p>
        <p>
        weather<input value={weather} onChange={(event) => {
          setWeather(event.target.value);
        }} />
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