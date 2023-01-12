const Training = require('../../db/models/training')

class TrainingActions {
    
    async saveTraining(req, res){
        const title = req.body.title;
        const when = req.body.when;

        let train;
        try{
            train = new Training({title, when});
            await train.save();
        }catch(err){
            return res.status(422).json({message: err.message})
        }
        

        res.status(201).json(train);
    }

    // pobieranie wszystkich notatek
    async getAllTrainings(req,res) {
        let doc;
        try {
            doc = await Training.find({});
        } catch(err){
            return res.status(500).json({message: err.message})
        }

        res.status(200).json(doc)
    }

    // pobranie jednej notatki
    async getTraining(req,res) {
        const id = req.params.id
        const train = await Training.findOne({_id: id})
        res.status(200).json(train)
    }

    // aktualizowanie notatki
    async updateTraining(req,res) {
        const id = req.params.id
        const title = req.body.title;
        const when = req.body.when;

        const train = await Training.findOne({_id: id})
        train.title = title
        train.when = when
        
        await train.save()

        res.status(201).json(train)
    }

    // usuwanie notatki
    async deleteTraining(req,res) {
        const id = req.params.id
        await Training.deleteOne({_id: id})
        res.status(204).send();
    }

}

module.exports = new TrainingActions();