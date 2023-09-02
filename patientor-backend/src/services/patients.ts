import { v1 as uuid } from 'uuid';
import patients from '../data/patients';
import { PatientWithoutSSN, NewPatient, Patient} from '../types';

const getPatientWithoutSSN = () : PatientWithoutSSN[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

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
  getPatientWithoutSSN,
};