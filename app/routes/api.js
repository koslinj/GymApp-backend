const express = require('express')
const router = express.Router()

const noteActions = require('../actions/api/exerciseActions')

// pobieranie wszystkich ćwiczeń z treningu
router.get('/exercises', noteActions.getAllExercises);
// pobieranie jednego ćwiczenia
router.get('/exercises/:id', noteActions.getExercise);
// zapisywanie ćwiczeń
router.post('/exercises', noteActions.saveExercise);
// edytowanie ćwiczeń
router.put('/exercises/:id', noteActions.updateExercise);
// usuwanie ćwiczeń
router.delete('/exercises/:id', noteActions.deleteExercise);

module.exports = router