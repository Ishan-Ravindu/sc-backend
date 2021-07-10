const Stock = require("../modules/stock");

exports.createStock = async (req, res, next) => {
  // console.log(req.body.first);
  // console.log(req.body.last);

  const post = new Stock({
    item: req.body.item,
    current_level: req.body.current_level,
    full_level: req.body.full_level,
    reorder_level: req.body.reorder_level,
  });
  const result = await post.save();
  res.status(200).json(result);
};
exports.getStockDetails = (req, res, next) => {
  Stock.find()
    .then((Stock) => {
      if (Stock) {
        res.status(200).json(Stock);
      } else {
        res.status(404).json({ message: "Stock not Found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching Stock failed!",
      });
    });
};

exports.deleteStock = (req, res, next) => {
  // console.log(req);
  // console.log(req);
  // return;
  Stock.deleteOne({ _id: req.query.id })
    .then((result) => {
      // console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Stock deleted" });
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

exports.updateStock = (req, res, next) => {
  console.log(req);
  const stock = {
    item: req.body.item,
    current_level: req.body.current_level,
    full_level: req.body.full_level,
    reorder_level: req.body.reorder_level,
  };
  Stock.updateOne({ _id: req.body._id }, stock)
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
