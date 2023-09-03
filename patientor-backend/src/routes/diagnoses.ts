import express from 'express';
import diagnosisService from '../services/diagnoses';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnosisService.getDiagnosis());
});

export default router;