const express = require('express');
const app = express();
const Home = require('./Routes/Home');
const About = require('./Routes/About');
const Form = require('./Routes/Form');
const Contact = require('./Routes/Contact');

app.use((req,res,next)=>{
 req.data = 'Saqib Ali'
 next()

})

app.use('/',Home);
app.use('/about',About);
app.use('/form',Form)
app.use('/contact',Contact)

app.listen(3000)