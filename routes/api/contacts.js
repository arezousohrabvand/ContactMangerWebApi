//Router that handle requests to api/contacts
const express=require('express');
const router=express.Router();
//import the model
const Contact=require('../../models/contact');

//Configure your router by adding handlers
//GET handler for/api/contacts
//Goal: view a list of contacts
router.get('/',(req,res,next)=> {
   Contact.find((err,contacts)=>{
       if(err){
           console.log(err);
           res.json('Error!').status(500);
       }
       else{
           res.json(contacts).status(200);
       }
   })
   
})
//Post/contacts
router.post('/',(req,res,next) => {
if(!req.body.firstName){
    res.json({'ValidationError':'First Name is a required field'}).status(400);
}
else if(!req.body.lastName){
    res.json({'ValidationError':'Last Name is a required field'}).status(400);
}
else if(!req.body.lastName){
    res.json({'ValidationError':'Email is a required field'}).status(400);
}
else{
    Contact.create(
       {
            firstName:req.body.firstName,
            middleName:req.body.middleName,
            lastName:req.body.lastName,
            emailAddress:req.body.emailAddress,
            phoneNumber:req.body.phoneNumber,
            addressLine1:req.body.addressLine1,
            addressLine2:req.body.addressLine2,
            province:req.body.province,
            postCode:req.body.province,
            country:req.body.country

        },
        (err,newContact) =>{
            if(err){
                console.log(err);
                res.json({'ErrorMessage':'Server threw an exception'}).status(500);

            }
            else {
                res.json(newContact).status(200);
            }
        })
        
    }
})
//Post/contacts/:_id
router.put('/:_id',(req,res, next)=>{
//validate required fields
    if(!req.body.firstName){
        res.json({'ValidationError':'First Name is a required field'}).status(400);
    }
    else if(!req.body.lastName){
        res.json({'ValidationError':'Last Name is a required field'}).status(400);
    }
    else if(!req.body.lastName){
        res.json({'ValidationError':'Email is a required field'}).status(400);
    }
    else{
    Contact.findOneAndUpdate(
        //filter query
        { _id: req.params._id },
           {
                firstName:req.body.firstName,
                middleName:req.body.middleName,
                lastName:req.body.lastName,
                emailAddress:req.body.emailAddress,
                phoneNumber:req.body.phoneNumber,
                addressLine1:req.body.addressLine1,
                addressLine2:req.body.addressLine2,
                province:req.body.province,
                postCode:req.body.province,
                country:req.body.country
    
            },
            (err,updateContact) =>{
                if(err){
                    console.log(err);
                    res.json({'ErrorMessage':'Server threw an exception'}).status(500);
    
                }
                else {
                    res.json(updateContact).status(200);
                }
            })
            
        }
});
//delete/contacts/:_id
router.delete('/:_id', (req, res, next) => {
    Contact.remove(
        { _id: req.params._id }, // filter query with the id 
        (err) => {
            if (err) {
                console.log(err);
                res.json({ 'ErrorMessage': 'Server threw exception' }).statusCode(500);                
            }
            else {
                res.json({ 'success': 'true' }).status(200);
            }
        }
    );
});
 //export the router so we can configure it in app.js
 module.exports = router;