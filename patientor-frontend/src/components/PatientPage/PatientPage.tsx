import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Patient } from "../../types";
import patientService from '../../services/patients';
import EntryPage from "./Entry";

const PatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const fetchedPatient = await patientService.getById(id!);
        setPatient(fetchedPatient);
      } catch (error) {
        console.error("Error fetching patient:", error);
      }
    };

    if (id) {
      fetchPatient();
    }
  }, [id]);

  return (
    <div>
      {patient ? (
        <>
          <h1>{patient.name}</h1>
          <p>Gender: {patient.gender}</p>
          <p>SSN: {patient.ssn}</p>
          <p>Occupation: {patient.occupation}</p>
          {patient.entries.length > 0 && (
            <div>
              <h3>entries</h3>
                {patient.entries.map((entry) => (
                  <EntryPage entry={entry} />
                ))}
            </div>
          )}
        </>
      ) : (
        <p>Patient not found</p>
      )}
    </div>
  );
};

export default PatientPage;
