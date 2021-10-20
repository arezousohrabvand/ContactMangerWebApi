//Import Mongoose
const mongoose=require('mongoose');
//create scheam
const contactsSchemaDefinition= {
    firstName:{
        type:String,
        required:true
    },
    middleName
    :{
        type:String

    },
    lastName:{
        type:String,
        required:true
    },

    emailAddress:{
        type:String,
        required:true
    },

    phoneNumber:{
        type:String
    },
    addressLine1:{
        type:String
    },
    addressLine2:{
        type:String
    },
    province:{
        type:String
    },
    postCode:{
        type:String
    },
    country:{
        type:String
    }
}
var contactsSchema=new mongoose.Schema(contactsSchemaDefinition);
module.exports=mongoose.model('Contact',contactsSchema);