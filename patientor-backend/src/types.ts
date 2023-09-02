export interface Diagnose {
  name: string;
  code: string;
  latin?: string;
}

export enum Gender {
  Female = 'female',
  Male = 'male',
  Other = 'other',
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type PatientWithoutSSN = Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, 'id'>;
