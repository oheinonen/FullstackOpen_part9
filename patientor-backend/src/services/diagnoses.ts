import diagnosisData from '../data/diagnoses';
import { Diagnosis } from '../types';

const getDiagnosis = (codes?: string[]) : Diagnosis[] => {
  return codes
    ? diagnosisData.filter((diagnosis) => codes.includes(diagnosis.code))
    : diagnosisData;
};

export default {
  getDiagnosis,
};