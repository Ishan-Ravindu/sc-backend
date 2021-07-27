const express = require("express");
const router = express.Router();
const UserController = require("../controllers/bill");

router.post("/createBill", UserController.createBill);
router.get("/BillDetails", UserController.getBillDetails);
router.delete("/billDelete", UserController.deleteBill);
router.put("/updateBillItem", UserController.updateBill);
router.get("/getBillItemName", UserController.getBillItemName);
router.get("/getBillTotall", UserController.getBillTotall);
//router.get("/getBillItemPrice", UserController.getBillItemPrice);

module.exports = router;
