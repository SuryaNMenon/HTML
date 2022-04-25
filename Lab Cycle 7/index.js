const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const rootFolder = {root: __dirname};

const mongoClient = require('mongodb').MongoClient;
const conString = 'mongodb://localhost:27017';

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'Page')));

app.post('/register.html', (req, res)=>{
    let user = req.body.username;
    let pass = req.body.password;
    let pack = req.body.package;
    let data = {
        user : user,
        pass : pass,
        pack : pack
    };
    console.log(data);
    mongoClient.connect(conString, (err, client)=>{
        if(err) throw err;
        console.log("Connected to MongoDB");
        let db = client.db("webDB");
        db.collection("userData").insertOne(data, (err, res)=>{
            if(err) throw err;
            console.log("Data Added to DB");
            console.log(db.collection("userData").find());
            client.close();
        });

    });
    res.end(`${user} thanks for registering for ${pack} package`);    
});


app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});