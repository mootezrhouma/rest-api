const mongoose =require ('mongoose')
const Schema = mongoose.Schema()

// const contactSchema = {
//     phone: Number,
//     email: String,
//     adress: String,
// }

const userSchema= {
    firstname: {type: String , required: true},
    lastname: {type:String , required: true},
    age: Number, 
    phone: {type: Number},
    email: {type: String},
    adress: {type: String},
}

const user = mongoose.model("user", userSchema)
module.exports= user