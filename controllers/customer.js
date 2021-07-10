 const Customer = require('../modules/customer');

    exports.createCustomer = (req, res, next) => {
        // console.log(req.body.first);
        // console.log(req.body.last);
        
        const post = new Customer({
            first_name: req.body.first,
            last_name: req.body.last,
            mobile_number: req.body.mobile
            
    
        });
        post.save().then(()=>{
            console.log("success");
        });

    }
    exports.getCustomerDetails = (req,res,next)=>{
        Customer.find()
        .then(Customer => {
          if(Customer){
            res.status(200).json(Customer);
          } else {
            res.status(404).json({message : 'Customer not Found!'});
          }
        }).catch(error =>{
          res.status(500).json({
            message: "Fetching Customer failed!"
          });
        })
      }


      exports.deleteCustomer = (req,res,next)=>{
        // console.log(req.params.id);
        // return;
        Customer.deleteOne({_id: req.params.id})
        .then(result => {
          // console.log(result);
          if(result.n > 0){
            res.status(200).json({message: 'Customer deleted'});
          } else{
            res.status(401).json({ message: "Not authorized!"});
          }
      
        }).catch(error =>{
          res.status(500).json({
            message: "deleting post failed!"
          });
        })
      
      }

      exports.updateCustomer = (req,res,next)=>{
        const Customer =new Customer({
          first_name: req.body.first,
          last_name: req.body.last,
          mobile_number: req.body.mobile
        });
        Customer.updateOne({_id: req.params.id}, customer )
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