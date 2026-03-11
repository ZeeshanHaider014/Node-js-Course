const express = require('express');
const router = express.Router();
const personlaptop = require('./../models/personlaptop');

//*******************************PERSONLAPTOP APIS***************************** */

router.get("/", async(req,res)=>{
  try{
    const  data = await personlaptop.find();
     console.log("data fetch");
    res.status(200).json(data);
  }catch(err){
   console.log("internal server error");
   res.status(500).json({ err: "ínternal server error" });

  }
});



//post route to add a peson
router.post("/", async (req, res) => {
  try {
    const data = req.body; //ASSUMING req body containing person data

    //create new person document using the mongoose model
    const newPersonlaptop = new personlaptop(data);

    //save new person into database
    const response = await newPersonlaptop.save();
    console.log("data saved", response);
    res.status(200).json(response);
  } catch (err) {
    console.log("internal server error");
    res.status(500).json({ err: "ínternal server error" });
  }
});
module.exports = router;