const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/configDatabase/database'); 
const usermodel=require('./src/models/User') ;
const cartemodel=require('./src/models/Carte')
const Timezone=require('./src/models/Timezone')
const Jours=require('./src/models/Jours')
const Evenement=require('./src/models/Evenement')
const Evenementtype=require('./src/models/Evenement_type')
const userrouter=require('./src/routes/User')
const carterouter=require('./src/routes/Carte')
const timezonerouter=require('./src/routes/Timezone')




const app = express();
app.use(bodyParser.json());
////API USER ////
app.post('/user',userrouter)
app.patch('/user/:id_user/addcarte',userrouter)
app.patch('/user/:id_user', userrouter);
app.get('/users',userrouter);
app.get('/user/:id_user',userrouter);
app.delete('/user/:id_user',userrouter);
 
/////////////////////

///API CARTE ///////
app.post('/carte',carterouter)
///////////////////

////API TIMEZONE////
app.post('/timezone/create',timezonerouter)
////////////////







// Sync the database and start the server
sequelize.sync({force:true}) 
  .then(() => {
    console.log('Database and tables created!');
    
    // Continue with starting the server
    app.listen(5000, () => {
      console.log('Server is running on port 5000!');
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
