import axios from 'axios';
import { NonSensitiveDiaryEntry } from '../types';
import { apiBaseUrl } from "../constants";

const getAll = async () => {
  console.log('fetching')
  const { data } = await axios.get<NonSensitiveDiaryEntry[]>(
    `${apiBaseUrl}/diaries`
  );
  console.log('done')

  return data;
};

export default {
  getAll
};

