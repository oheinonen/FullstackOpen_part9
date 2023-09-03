export interface Diagnosis {
  name: string;
  code: string;
  latin?: string;
}

export enum Gender {
  Female = 'female',
  Male = 'male',
  Other = 'other',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis['code']>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

export enum EntryType {
  HealthCheck = 'HealthCheck',
  Hospital = 'Hospital',
  OccupationalHealthcare = 'OccupationalHealthcare',
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface HospitalDischarge {
  date: string;
  criteria: string;
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: HospitalDischarge;
}

interface SickLeave {
  startDate: string;
  endDate: string;
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: SickLeave;
}


export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[]
}

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatient = Omit<Patient, 'id'>;
