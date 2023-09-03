import { v1 as uuid } from 'uuid';
import patients from '../data/patients';
import { NonSensitivePatient, NewPatient, Patient} from '../types';

const getNonSensitivePatient = () : NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const getPatientById = (id: string): Patient | undefined => patients.find((patient) => patient.id === id);

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...patient,
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  addPatient,
  getNonSensitivePatient,
  getPatientById
};