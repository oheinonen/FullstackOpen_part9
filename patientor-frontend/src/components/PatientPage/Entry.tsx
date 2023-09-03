import { useState, useEffect } from "react";
import { Entry, Diagnosis} from "../../types";
import diagnosisService from '../../services/diagnoses'
interface Props {
  entry : Entry;
}
const EntryPage = ({ entry }: Props) => {
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

  useEffect(() => {

    const fetchDiagnoses = async () => {
      const diagnoses = await diagnosisService.getDiagnoses(entry.diagnosisCodes);
      setDiagnoses(diagnoses);
    };
    void fetchDiagnoses();
  }, [entry]);

  return (
    <div>
      <p>{entry.date} <span style={{fontStyle:'italic'}}>{entry.description}</span></p>
      <ul>
        {diagnoses.map(({code, name }) => <li>{code} {name}</li>)}
      </ul>
    </div>
  );
};

export default EntryPage;
