const {Router} =require('express');
const { getUser, getUsers, updateUser,deleteUser, createUsers } 
= require('../controllers/users.controller');
const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUsers)

    router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;