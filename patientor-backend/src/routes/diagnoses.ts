import express from 'express';
import diagnosisService from '../services/diagnoses';
const router = express.Router();

router.get('/', (req, res) => {
  const codes = req.query.codes as string[];
  const diagnoses = diagnosisService.getDiagnosis(codes);
  res.send(diagnoses);
});

export default router;