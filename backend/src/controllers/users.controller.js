const userCtrl = {

};
userCtrl.getUsers = (req,res) => res.json({Users: []});
userCtrl.createUsers = (req,res) => res.json({message: "usuario guardada"});
userCtrl.getUser = (req,res) => res.json({name: "Jaime Diaz"});
userCtrl.updateUser = (req,res) => res.json({message: "User Updated"});
userCtrl.deleteUser = (req,res) => res.json({message: "User Deleted"})

module.exports = userCtrl;