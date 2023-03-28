import  {model, Schema} from "mongoose";
import { IUser } from "../interfaces/User.interface";



const schema = new Schema({
    username:{
        type:String,
        require:true
    },
    pass:{
        type:String,require:true
    },
    age:{
        type:Number, require:false
    },
    documentID:{
        type:String, require:false
    }
});

const User = model<IUser>('User',schema);

export default User;
