import axios from 'axios';
import { NewDiaryEntry, NonSensitiveDiaryEntry } from '../types';
import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<NonSensitiveDiaryEntry[]>(
    `${apiBaseUrl}/diaries`
  );
  return data;
};

const addDiary = async (entry: NewDiaryEntry) => {
  try {
    const { data } = await axios.post<NewDiaryEntry>(
      `${apiBaseUrl}/diaries`,
      entry
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message)
      console.error(error.response);
      return error.response?.data as string || error.message;
    } else {
      console.error(error);
      return 'Unknown error';
    }
  }
};

export default {
  getAll,
  addDiary
};

