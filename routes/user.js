const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

//import middleware to verify the users
//const checkAuth = require('../middleware/check-auth');

router.post("/signup", UserController.createUser);
router.post("/login", UserController.login);
router.get("/profile/:id", UserController.getUserDetails);
module.exports = router;
