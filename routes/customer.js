const express = require('express');
const router = express.Router();
const UserController = require('../controllers/customer');



router.post("/createCustomer", UserController.createCustomer);
router.get("/customerDetails", UserController.getCustomerDetails);
router.delete("/customerDelete", UserController.deleteCustomer);
router.put("/updateCustomer", UserController.updateCustomer);


module.exports=router;