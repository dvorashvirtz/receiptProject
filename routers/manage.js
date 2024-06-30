const { param } = require('../app');
const { createNewCustomer, existCustomer } = require('../modules/users')
const express = require('express');

const router = express.Router();

router.post('/createCustomer', express.json(), (req, res) => {
    try {
      const customer=req.body();
      const response=createNewCustomer(customer);
      res.status(200).json(response);
    }
    catch (error) {
      if(error.type)
      {
        res.status(error.type).send(error.message);
      }
      else{
        res.status(500).send(error.message);
      }
    }
})

router.get('/checkusername:name',(req,res)=>{
    try {
        const {name}=req.params;
        const response=existCustomer(name);
        res.status(200).json({exist:response});
      }
      catch (error) {
        if(error.type)
        {
          res.status(error.type).send(error.message);
        }
        else{
          res.status(500).send(error.message);
        }
      }
})


