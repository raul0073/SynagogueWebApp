import mongoose from 'mongoose'

const connectMongoDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to atlas");
    } catch (err){
        console.log("Cannot connect to atlas", err);
    }

}

export default connectMongoDB