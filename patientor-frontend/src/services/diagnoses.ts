import axios from "axios";
import { Diagnosis } from "../types";

import { apiBaseUrl } from "../constants";

const getDiagnoses = async (codes?: string[]) => {
  const { data } = await axios.get<Diagnosis[]>(
    `${apiBaseUrl}/diagnosis`,
    { params: { codes } }
  );
  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDiagnoses
};

