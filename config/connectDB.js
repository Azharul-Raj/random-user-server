const MongoClient=require('mongodb')
const uri=""
const client=new MongoClient(uri);
module.exports.connectDB=async()=>{
    try {
        await client.connect();
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}