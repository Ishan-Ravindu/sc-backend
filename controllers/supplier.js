const Supplier = require("../modules/supplier");

exports.createSupplier = (req, res, next) => {
  // console.log(req.body.first);
  // console.log(req.body.last);

  const post = new Supplier({
    first_name: req.body.first,
    last_name: req.body.last,
    mobile_number: req.body.mobile,
    email: req.body.email,
  });
  post.save().then(() => {
    console.log("success");
  });
};
exports.getSupplierDetails = (req, res, next) => {
  Supplier.find()
    .then((Supplier) => {
      if (Supplier) {
        res.status(200).json(Supplier);
      } else {
        res.status(404).json({ message: "Supplier not Found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching Supplier failed!",
      });
    });
};

exports.deleteSupplier = (req, res, next) => {
  // console.log(req.params.id);
  // return;
  Supplier.deleteOne({ _id: req.params.id })
    .then((result) => {
      // console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Supplier deleted" });
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

exports.updateSupplier = (req, res, next) => {
  const Supplier = new Supplier({
    first_name: req.body.first,
    last_name: req.body.last,
    mobile_number: req.body.mobile,
  });
  Supplier.updateOne({ _id: req.params.id }, Supplier)
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
