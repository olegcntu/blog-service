const mongoose=require('mongoose')
const validateMongoDbId=(id)=>{
    const isValid=mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new Error('This id is no valid or not found')
}
module.exports=validateMongoDbId