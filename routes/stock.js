const express = require('express');
const router = express.Router();
const UserController = require('../controllers/stock');



router.post("/createStock", UserController.createStock);
router.get("/stockDetails", UserController.getStockDetails);
router.delete("/stockDelete", UserController.deleteStock);
router.put("/updateStock", UserController.updateStock);


module.exports=router;