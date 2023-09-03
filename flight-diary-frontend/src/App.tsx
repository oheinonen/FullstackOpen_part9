import { useEffect, useState } from 'react';
import diaryservice from './services/diaries'
import Diary from './components/Diary';
import { NonSensitiveDiaryEntry } from './types';

const App = () => {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    const fetchDiariesList = async () => {
      const diaries = await diaryservice.getAll();
      setDiaries(diaries);
    };
    void fetchDiariesList();
  }, []);

  return (
    <div>
      <h2> Diary entries </h2>
      {diaries.map((diary) => (
        <Diary diary={diary} key={diary.id} />)
      )}
    </div>
  );
};

export default App;