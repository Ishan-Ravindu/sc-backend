const express = require("express");
const router = express.Router();
const senderSms = require("../controllers/sms");

router.post("/senderSms/", (req, res, next) => {
  senderSms.senderSms(req.body.message, req.body.mobile).then((message) => {
    res.status(200).json({
      message,
    });
  });
});

module.exports = router;
