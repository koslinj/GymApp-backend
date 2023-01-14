const express = require('express')
const router = express.Router()

const exerciseActions = require('../actions/api/exerciseActions')
const trainingActions = require('../actions/api/trainingActions')
const listActions = require('../actions/api/listActions')

// pobieranie wszystkich ćwiczeń z treningu
router.get('/exercises', exerciseActions.getAllExercises);
// pobieranie jednego ćwiczenia
router.get('/exercises/:id', exerciseActions.getExercise);
// zapisywanie ćwiczeń
router.post('/exercises', exerciseActions.saveExercise);
// edytowanie ćwiczeń
router.put('/exercises/:id', exerciseActions.updateExercise);
// usuwanie ćwiczeń
router.delete('/exercises/:id', exerciseActions.deleteExercise);

// pobieranie wszystkich treningów
router.get('/trainings', trainingActions.getAllTrainings);
// pobieranie jednego treningu
router.get('/trainings/:id', trainingActions.getTraining);
// zapisywanie treningu
router.post('/trainings', trainingActions.saveTraining);
// edytowanie treningu
router.put('/trainings/:id', trainingActions.updateTraining);
// usuwanie treningu
router.delete('/trainings/:id', trainingActions.deleteTraining);

// pobieranie wszystkich nazw ćwiczeń
router.get('/list', listActions.getList);
// zapisywanie nowej nazwy ćwiczenia
router.post('/list', listActions.saveNameToList);
// usuwanie nazwy ćwiczenia
router.delete('/list/:id', listActions.deleteNameFromList);

module.exports = router