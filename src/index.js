const express = require('express');
const collection = require('./mongodb');

const app = express();
const path = require('path');
const hbs = require('hbs');
const templatePath = path.join(__dirname, '../templates')

app.use(express.json())
app.set('view engine', 'hbs');
app.set("views", templatePath)


app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', async(req, res) => {
    
    
});

app.get("/signup", (req, res) => {
    res.render('signup');
});

app.post('/signup', async(req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
    };

    await collection.insertMany([data]);
    res.render('home');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

 