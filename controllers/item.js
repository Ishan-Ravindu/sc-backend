 const Item = require('../modules/item');

    exports.createItem = (req, res, next) => {
        // console.log(req.body.first);
        // console.log(req.body.last);
        
        const post = new Item({
            item_name: req.body.item_name,
            item_price: req.body.item_price,
            quantity:req.body.quantity,
            
    
        });
        post.save().then(()=>{
            console.log("success");
        });

    }

    
    exports.getItemDetails = (req,res,next)=>{
        Item.find()
        .then(Item => {
          if(Item){
            res.status(200).json(Item);
          } else {
            res.status(404).json({message : 'Item not Found!'});
          }
        }).catch(error =>{
          res.status(500).json({
            message: "Fetching Item failed!"
          });
        })
      }


      exports.deleteItem = (req,res,next)=>{
        // console.log(req.params.id);
        // return;
       Item.deleteOne({_id: req.params.id})
        .then(result => {
          // console.log(result);
          if(result.n > 0){
            res.status(200).json({message: 'Item deleted'});
          } else{
            res.status(401).json({ message: "Not authorized!"});
          }
      
        }).catch(error =>{
          res.status(500).json({
            message: "deleting post failed!"
          });
        })
      
      }

      exports.updateItem = (req,res,next)=>{
        const Item =new Item({
          item_name: req.body.name,
          item_price: req.body.price,
          quantity:req.body.quantity
        });
        Item.updateOne({_id: req.params.id}, customer )
        .then(result => {
          // console.log(result);
          if(result.n > 0){
            res.status(200).json({ message: "Updated Successful!"});
          } else{
            res.status(401).json({ message: "Not authorized!"});
          }
      
        }).catch(error =>{
          res.status(500).json({
            message: "couldn't update post!"
          });
        });

      }