const express = require("express");
const router = express.Router();
const UserController = require("../controllers/item");

router.post("/createItem", UserController.createItem);
router.get("/ItemDetails", UserController.getItemDetails);
router.delete("/itemDelete", UserController.deleteItem);
router.put("/updateItem", UserController.updateItem);

module.exports = router;
