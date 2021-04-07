const noteCtrl = {

};

noteCtrl.getNotes = (req,res) => res.json({message: []});

noteCtrl.createNotes = (req,res) => res.json({message: "nota guardada"});

noteCtrl.getNote = (req,res) => res.json({title: "Petunia quiere ver SNF"});

noteCtrl.updateNote = (req,res) => res.json({message: "Note Updated"});

noteCtrl.deleteNote = (req,res) => res.json({message: "Note Deleted"})

module.exports = noteCtrl;