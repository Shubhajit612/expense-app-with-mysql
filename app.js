const express = require('express');
const http = require('http');

const app = new express();

const productRoutes = require('./router/expense');

const bodyParser = require('body-parser');

app.use(bodyParser.json({extended:false}));

var cors = require('cors');

app.use(cors());

const sequelize = require('./util/database');

app.use(productRoutes);


app.use((req,res,next)=>{
    res.send("<H1>This is Shubhajit</H1>")
})




//server

const server = http.createServer(app);

sequelize.sync({force:true}).then(res=>{
    console.log(res);
    server.listen(3000);
})
.catch(err=>{
    console.log(err);
})
