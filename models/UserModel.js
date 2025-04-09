import mongoose from 'mongoose';
const Schema = mongoose.Schema

const schema = new Schema  ({
name: {type:String, required: true },
email: {type:String, required: true, unique :true  },
password: {type:String, required: true },
role:  {type:String, required: true, default :'user' },
created_at :  {type:Date, default : Date.now },
uptade_at :  {type:Date, default : Date.now },
});

const UserModel = mongoose.model('User', schema);
export default UserModel;