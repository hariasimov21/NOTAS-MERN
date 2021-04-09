const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
        
    } catch(err){
        res.status(400).json({
            error: err
        })
    }
};

userCtrl.createUsers = async (req,res) => {
    try {
        const {username} = req.body;
        const newUser = new User({
            username
        });
        await newUser.save()
        res.json("usuario guardada")

    }catch(e){
        console.error(e);
        res.json(e.errmsg);
    }
};
/* userCtrl.getUser = (req,res) => res.json({name: "Jaime Diaz"});
userCtrl.updateUser = (req,res) => res.json({message: "User Updated"}); */

userCtrl.deleteUser = async (req,res) => {
    
    await User.findOneAndDelete(req.params.id);
    res.json("User Deleted")
}

module.exports = userCtrl;