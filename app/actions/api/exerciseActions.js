const Exercise = require('../../db/models/exercise')

class ExerciseActions {
    
    async saveExercise(req, res){
        const name = req.body.name;
        const sets = req.body.sets;
        const reps = req.body.reps;
        const weight = req.body.weight;
        const info = req.body.info;
        const training_id = req.body.training_id;
        const when = req.body.when;

        let exercise;
        try{
            exercise = new Exercise({name, sets, reps, weight, info, training_id, when});
            await exercise.save();
        }catch(err){
            return res.status(422).json({message: err.message})
        }
        

        res.status(201).json(exercise);
    }

    // pobieranie wszystkich notatek
    async getAllExercises(req,res) {
        let doc;
        try {
            doc = await Exercise.find({});
        } catch(err){
            return res.status(500).json({message: err.message})
        }

        res.status(200).json(doc)
    }

    // pobranie jednej notatki
    async getExercise(req,res) {
        const id = req.params.id
        const exercise = await Exercise.findOne({_id: id})
        res.status(200).json(exercise)
    }

    // aktualizowanie notatki
    async updateExercise(req,res) {
        const id = req.params.id
        const name = req.body.name;
        const sets = req.body.sets;
        const reps = req.body.reps;
        const weight = req.body.weight;
        const info = req.body.info;
        const training_id = req.body.training_id;
        const when = req.body.when;

        const exercise = await Exercise.findOne({_id: id})
        exercise.name = name
        exercise.sets = sets
        exercise.reps = reps
        exercise.weight = weight
        exercise.info = info
        exercise.training_id = training_id
        exercise.when = when
        
        await exercise.save()

        res.status(201).json(exercise)
    }

    // usuwanie notatki
    async deleteExercise(req,res) {
        const id = req.params.id
        await Exercise.deleteOne({_id: id})
        res.status(204).send();
    }

}

module.exports = new ExerciseActions();
