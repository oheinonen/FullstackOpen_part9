import axios from "axios";
import { Patient, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(
    `${apiBaseUrl}/patients`
  );

  return data;
};

const getById = async (patientId: string): Promise<Patient | null> => {
  try {
    const { data } = await axios.get<Patient>(
      `${apiBaseUrl}/patients/${patientId}`
    );
    return data;
  } catch (error) {
    console.error(`Error fetching patient with ID ${patientId}:`, error);
    return null;
  }
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(
    `${apiBaseUrl}/patients`,
    object
  );

  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll, create, getById
};

