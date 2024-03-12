const router =require('express').Router()
const timezoneControle=require('../controllers/Timezone')

router.post('/timezone/create',timezoneControle.create_timezone_with_jours)
module.exports=router