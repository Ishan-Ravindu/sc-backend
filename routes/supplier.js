const express = require('express');
const router = express.Router();
const UserController = require('../controllers/supplier');




router.post("/createSupplier", UserController.createSupplier);
router.get("/supplierDetails", UserController.getSupplierDetails);
router.delete("/supplierDelete", UserController.deleteSupplier);
router.put("/updateSupplier", UserController.updateSupplier);



module.exports=router;