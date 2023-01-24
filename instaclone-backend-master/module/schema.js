// const mongoose= require("mongoose")
// mongoose.set('strictQuery', false);
// // mongoose.connect("")
// mongoose.connect("mongodb+srv://leenamahato:leenamahato@cluster0.olepepr.mongodb.net/?retryWrites=true&w=majority")
// .then(()=>{
//     console.log("Sucessfully connected with Database")
// })
// .catch((error)=>{
//     console.log(error)
// })

// const schema = mongoose.Schema
// const userSchema= new schema({
    
//     image:{type:String},
//     name:{type:String,required:true},
//     location:{type:String,required:true},
//     description:{type:String}
// })
// let InstaUser=mongoose.model("instaUser",userSchema)


// module.exports=InstaUser



const mongoose= require("mongoose")

// mongoose.connect("")
mongoose.connect("mongodb+srv://leenamahato:leenamahato@cluster0.olepepr.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Sucessfully connected with Database")
})
.catch((error)=>{
    console.log(error)
})

const schema = mongoose.Schema
const userSchema= new schema({
    image:{type:String},
    name:{type:String,required:true},
    location:{type:String,required:true},
    description:{type:String}
})
let InstaUser=mongoose.model("instaUser",userSchema)

module.exports=InstaUser