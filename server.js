const express = require("express");

// initilisation
const app = express();

// application will now use only json data format
app.use(express.json());

const port = 8081;

const toDoList = ["hey everyone", "hope u all", "are doing", "awesome at ur work"]; // array



// http://localhost:8081/todos
app.get("/todos",(req, res)=>{
    // callback
    res.status(200).send(toDoList)
})


// http://localhost:8081/todos
app.post("/todos", (req,res)=>{
    let newDoItem = req.body.item;
    toDoList.push(newDoItem);
    res.status(201).send({
        message: "The task was added sucessfully"
    })
})

app.delete("/todos", (req,res)=>{
var itemToDelete = req.body.item;

toDoList.find((elem, index)=>{
    if(elem === itemToDelete){
        toDoList.splice(index, 1);
    }
});
res.status(204).send({
    message: `Deleted item ${req.body.item}`
})
})


// put, patch
app.all("/todos", (req, res)=>{
    res.status(501).send({
        message: "Not yet implemented"
    })
})

app.all("*",(req,res)=>{
    res.status(404).send({
        message: "default url"
    })
})

app.listen(port, ()=>{
    console.log(`NodeJs with Express started running sucesfuly on port ${port}`)
})