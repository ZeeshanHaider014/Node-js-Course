const express = require('express');
const router = express.Router();
const person = require('./../models/person');

//post route to add a peson
router.post("/", async (req, res) => {
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
router.get("/", async(req,res)=>{
  try{
    const  data = await person.find();
     console.log("data fetch");
    res.status(200).json(data);
  }catch(err){
   console.log("internal server error");
   res.status(500).json({ err: "ínternal server error" });

  }
});
/////////////WORKTPYE\\\\\\\\\\\\\\\\\\\\\\
router.get('/person/:workType',async(req,res)=>{
  try{
    const workType = req.params.workType;
    if(workType == 'THALLAY'|| workType == 'BALGHAR'){
      const response = await person.find({Village : workType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error:'invalid workType'});
    }
  }catch(err){
    console.log("internal server error");
    res.status(500).json({ err: "ínternal server error" });
  }
});
router.put('/:id', async(req,res)=>{
    try{
        const personid = req.params.id;
        const updatedPersonData = req.body;
        const response = await person.findByIdAndUpdate(personid,updatedPersonData,{
            new: true, //Return the update document
            runValidators: true,//run mongoose validation
        })
        if(!response){
            return res.status(404).json({error : 'person not found'});

        }
        console.log('data update');
        res.status(200).json(response);

    }catch(err){
        console.log(err),
        res.status(500).json({error:'internal server Error'});
    }
})
///DELETE//
router.delete('/:id', async(req,res)=>{
    try{
        const personid = req.params.id;
        const updatedPersonData = req.body;
        const response = await person.findByIdAndDelete(personid);
        if(!response){
            return res.status(404).json({error : 'person not found'});

        }
        console.log('data delete');
        res.status(200).json({message:'Record deleted successfully'});

    }catch(err){
        console.log(err),
        res.status(500).json({error:'internal server Error'});
    }
})
module.exports = router;