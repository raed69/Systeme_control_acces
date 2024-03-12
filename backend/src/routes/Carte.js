const router =require('express').Router()
const carteControle=require('../controllers/Carte')

router.post('/carte',carteControle.CreatesimpleCarte)


module.exports=router