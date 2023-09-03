import { NewPatient, Entry, EntryType, Gender } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isEnumValue = (value: string): value is EntryType => {
  return Object.values(EntryType).includes(value as EntryType);
};

const parseEntriesField = (entries: unknown): Entry[] => {
  if (!Array.isArray(entries)) {
    throw new Error('Entries should be an array');
  }

  const parsedEntries: Entry[] = [];

  entries.forEach((entry) => {
    if (isEnumValue(entry.type)) {
      parsedEntries.push(entry);
    } else {
      throw new Error('Invalid entry type');
    }
  });

  return parsedEntries;
};

const parseStringField = (field: unknown, fieldName: string): string => {
  if (!isString(field)) {
    throw new Error(`Incorrect or missing ${fieldName}`);
  }
  return field;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDateOfBirth = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
      throw new Error('Incorrect date: ' + date);
  }
  return date;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(v => v.toString()).includes(param);
};

const parseGender = (gender: unknown): Gender=> {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect gender: ' + gender);
  }
  return gender;
};


const toNewPatient = (object: unknown): NewPatient => {
  if ( !object || typeof object !== 'object' ) {
    throw new Error('Incorrect or missing data');
  }

  if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object && 'entries' in object) {
    const newPatient: NewPatient = {
      name: parseStringField(object.name, 'name'),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseStringField(object.ssn, 'ssn'),
      gender: parseGender(object.gender),
      occupation: parseStringField(object.occupation, 'occupation'),
      entries: parseEntriesField(object.entries)
    };
  
    return newPatient;
  }

  throw new Error('Incorrect data: a field missing');
};

export default toNewPatient;