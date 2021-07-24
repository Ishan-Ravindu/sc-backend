const Bill = require("../modules/bill");

exports.createBill = async (req, res, next) => {
  // console.log(req.body.first);
  // console.log(req.body.last);
  console.log(req);

  const currentdate = new Date();

  const post = new Bill({
    bilTotal: req.body.bilTotal,
    bil: req.body.bil,
    isDelivered: req.body.isDelivered,
    postDate: currentdate,
  });
  // post.save().then(() => {
  //   res.status(200).json({ message: "done" });
  // });
  const result = await post.save();
  res.status(200).json(result);
};

exports.getBillDetails = (req, res, next) => {
  Bill.find()
    .then((Bill) => {
      if (Bill) {
        res.status(200).json(Bill);
      } else {
        res.status(404).json({ message: "Bill not Found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching Bill failed!",
      });
    });
};

exports.deleteBill = (req, res, next) => {
  // console.log(req.params.id);
  // return;
  Bill.deleteOne({ _id: req.params.id })
    .then((result) => {
      // console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Bill deleted" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "deleting post failed!",
      });
    });
};

exports.updateBill = (req, res, next) => {
  const bill = new Bill({
    bilTotal: req.body.billTotal,
    bil: req.body.bil,
    isDelivered: req.body.isDelivered,
    deliveredDate: req.body.deliveredDate,
  });
  Bill.updateOne({ _id: req.params.id }, bill)
    .then((result) => {
      // console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Updated Successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "couldn't update post!",
      });
    });
};

exports.getBillItemName = (req, res, next) => {
  Bill.find({ Item: req.body.Item })
    .then((Bill) => {
      if (Bill) {
        res.status(200).json(Bill);
      } else {
        res.status(404).json({ message: "Bill not Found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching Bill failed!",
      });
    });
};
