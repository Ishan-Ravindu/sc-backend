const Item = require("../modules/item");

exports.createItem = async (req, res, next) => {
  const post = new Item({
    item_name: req.body.item_name,
    item_price: req.body.item_price,
  });
  const result = await post.save();
  res.status(200).json(result);
};

exports.getItemDetails = (req, res, next) => {
  Item.find()
    .then((Item) => {
      if (Item) {
        res.json(Item, 200);
      } else {
        res.json({ message: "Item not Found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching Item failed!",
      });
    });
};

exports.deleteItem = (req, res, next) => {
  // console.log(req.params.id);
  // return;
  Item.deleteOne({ _id: req.query.id })
    .then((result) => {
      // console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Item deleted" });
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

exports.updateItem = (req, res, next) => {
  const item = {
    item_name: req.body.item_name,
    item_price: req.body.item_price,
  };
  Item.updateOne({ _id: req.body._id }, item)
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
