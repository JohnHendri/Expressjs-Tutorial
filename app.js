const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

const app = express();

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
    res.render('index',{
        title: 'Hello Customers'
    });
});

app.listen(port, ()=>{
    console.log(`server started on port ${port} `);
    
});
