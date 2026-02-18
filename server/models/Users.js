import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
   name:String,
   email:String,
   age:String
});
const users= mongoose.model('users',userSchema);
export default users;