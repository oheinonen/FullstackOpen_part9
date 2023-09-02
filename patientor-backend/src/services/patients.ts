import patients from '../data/patients';
import { PatientWithoutSSN } from '../types';

const getPatientWithoutSSN = () : PatientWithoutSSN[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getPatientWithoutSSN,
};