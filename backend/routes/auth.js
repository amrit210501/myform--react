const express = require('express');
const fs=require('fs');
const router = express.Router();

// ROUTE 1: Create a file output using: POST "/api/auth/create". 
router.post('/create', (req, res) => {
    // If there are errors, return Bad request and the errors
    let success=false;
   
    try {
       
      console.log(req.body);
      fs.appendFileSync("output.json", JSON.stringify({name:req.body.name , password: req.body.password, email:req.body.email}));
      success=true;
      res.json({ success});
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })



module.exports = router