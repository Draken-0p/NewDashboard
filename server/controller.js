const asyncHandler = require("express-async-handler");
const database = require(".");
const data = require("./model");


const fetchdata = asyncHandler(async(req,res) =>{
    const { name,age,gender,pid,file1,file2,status } = req.body

        if(!name || !age || !gender ){
            console.log("empty"  )
            return res.sendStatus(400);
        }

    var newMessage = {
       name,
        age,
        gender,
        pid,
        file1,
        file2,
        status,
      };
      const senddata = await data.create(newMessage)
      console.log(senddata)
})


const getdata = asyncHandler(async(req,res)=>{
    try{ 
        data.find({}).then(async(result)=>{
        res.status(200).send(result);
        })
   } catch (error){
    res.status(400);
    throw new Error(error.message);
}
   
})


module.exports = {fetchdata , getdata}  