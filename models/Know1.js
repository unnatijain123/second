var mongoose=require('mongoose')
var Know1Schema=mongoose.Schema({
    title:{
        type:String,
        },
    description:{
        type:String,
        
    }
});
var Know1=module.exports=mongoose.model('Know1',Know1Schema);
module.exports.getKnow1=function(callback,limit){
    Know1.find(callback).limit(limit);  
}

module.exports.addKnow1 = (Know1, callback) => {
	Know1.create(Know1,callback);
}
