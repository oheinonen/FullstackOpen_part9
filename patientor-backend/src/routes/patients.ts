import express from 'express';
import patientService from '../services/patients';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPatientWithoutSSN());
});

export default router;