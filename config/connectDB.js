const {MongoClient}=require('mongodb')
const uri="mongodb://127.0.0.1:27017"
const client=new MongoClient(uri);
module.exports.connectDB=async()=>{
    try {
        await client.connect();
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports.users=client.db("random_users").collection("users")