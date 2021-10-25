'use strict';

const exp = require('express');

const app = exp();
var bodyParser = require('body-parser')
app.use(exp.json());
app.use(bodyParser.urlencoded({extended:false}))
console.log("wellcome to node js");

var listener = app.listen(process.env.PORT, function(){
console.log('Listening on port' + listener.address().port);
});


let students = [];

app.get("/students",getAllStds);
app.post("/student",addStd);
app.delete("/students",deleteAllStds);
app.delete("/student",deleteStd);

function getAllStds(req, res){
    console.log("getAllstds has been called!");
    res.json({"Name:1":students[0],"Name2:":students[1]});
}

function addStd(req,res){
    console.log("addStd has been called!");
    console.log("query:",req.query);
    console.log("body:",req.body);
    students.push(req.body);
    res.send(students)
}

function deleteAllStds(req,res){
    students = [];
    res.send("All Students has been deleted");
}

function deleteStd(req,res){

    let id = req.query.id;
    students.splice(id,1);
    res.send("student own the id " + id + " was deleted!");
}