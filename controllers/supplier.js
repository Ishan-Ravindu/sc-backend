const Supplier = require("../modules/supplier");

exports.createSupplier = async (req, res, next) => {
  // console.log(req.body.first);
  // console.log(req.body.last);

  const post = new Supplier({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    mobile_number: req.body.mobile_number,
    email: req.body.email,
  });
  const result = await post.save();
  res.status(200).json(result);
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
  Supplier.deleteOne({ _id: req.query.id })
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
  const supplier = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    mobile_number: req.body.mobile_number,
    email: req.body.email,
  };
  Supplier.updateOne({ _id: req.body._id }, supplier)
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
