const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'./main')))
app.set('view engine','pug');

app.set('views',path.join(__dirname,'./login'));
app.get('/',(req,res)=>{
    res.status(200);
    res.send('hello');
})
app.get('/login',(req,res)=>{
    res.status(200).render('index.pug');
})
app.listen(8000,()=>{
    console.log(`Server is running at `,8000);
})