const express = require("express");
const app = express();

const person = require("./models/person");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
//databe connection
const db = require("./databse");

//get request
app.get("/", (req, res) => {
  res.send("Wellcome to FLAT 804");
});

//post route to add a peson
app.post("/person", async (req, res) => {
  try {
    const data = req.body; //ASSUMING req body containing person data

    //create new person document using the mongoose model
    const newPerson = new person(data);

    //save new person into database
    const response = await newPerson.save();
    console.log("data saved", response);
    res.status(200).json(response);
  } catch (err) {
    console.log("internal server error");
    res.status(500).json({ err: "ínternal server error" });
  }
});

// Get method to get all person data
app.get("/person", async(req,res)=>{
  try{
    const  data = await person.find();
     console.log("data fetch");
    res.status(200).json(data);
  }catch(err){
   console.log("internal server error");
   res.status(500).json({ err: "ínternal server error" });

  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
