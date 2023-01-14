const List = require('../../db/models/list')

class ListActions {
    
    //dodanie nowej nazwy ćwiczenia
    async saveNameToList(req, res){
        const exercise_name = req.body.exercise_name;

        let list;
        try{
            list = new List({exercise_name});
            await list.save();
        }catch(err){
            return res.status(422).json({message: err.message})
        }
        

        res.status(201).json(list);
    }

    // pobieranie wszystkich nazw
    async getList(req,res) {
        let doc;
        try {
            doc = await List.find({});
        } catch(err){
            return res.status(500).json({message: err.message})
        }

        res.status(200).json(doc)
    }

    // usuwanie nazwy z listy ćwiczeń
    async deleteNameFromList(req,res) {
        const id = req.params.id
        await List.deleteOne({_id: id})
        res.status(204).send();
    }

}

module.exports = new ListActions();
