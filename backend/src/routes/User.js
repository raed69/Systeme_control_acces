const express = require('express')
const router = express.Router()
const userContr = require('../controllers/User')

router.post('/user', userContr.Creatuserwithcarte);
router.patch('/user/:id_user/addcarte',userContr.Addothercartetouser)
router.patch('/user/:id_user', userContr.Updateuser);
router.get('/users',userContr.ReadAlluser)
router.get('/user/:id_user',userContr.ReadOneuser)
router.delete('/user/:id_user',userContr.DeleteUser)



module.exports = router;
