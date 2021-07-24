const User = require("../modules/user");
// const PositionsHistoty = require('../models/positionsHistory');
// const CoordinatorHistoty = require('../models/coordinatorsHistory');
// const Achievement = require('../models/achievement');
// const AlumniUser = require('../models/alumniUser');
// const EventMode = require('../models/event');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      userId: req.body.userId,
      password: hash,
      email: req.body.email,
    });
    // console.log(req.userData);
    // console.log("works!");
    // return res.status(500).json({
    // });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "user created!!!",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Invalid authentication credentials!",
          err: err,
        });
      });
  });
};

//end function

exports.login = (req, res, next) => {
  User.findOne({ userId: req.body.userId })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth Failed Please Try Again!",
        });
      }

      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth Failed",
        });
      }

      const token = jwt.sign(
        { userId: fetchedUser.userId, id: fetchedUser._id },
        "secret_this_should_hidden",
        { expiresIn: "1h" }
      );

      res.status(200).json({
        token: token,
        expiresIn: 3600,
        id: fetchedUser._id,
        //role: fetchedUser.userRole,
        userId: fetchedUser.userId,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Invalid Authentication Creadintials!",
      });
    });
};

exports.getUserDetails = (req, res, next) => {
  User.findOne({ _id: req.body.id })
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found!" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Fetching user Failed!",
      });
    });
};
