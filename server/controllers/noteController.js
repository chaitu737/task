const shortId= require('shortid');
const response = require('../libs/responseLib');
const logger = require('../libs/loggerlib');
const time= require('../libs/timeLib');
const NoteModel = require('../models/note');
const check = require('../libs/checklib');



let createNote = (req,res)=>{
     newnote =new NoteModel({
        noteId:shortId.generate(),
        title:req.body.title,
        post:req.body.post,
        image:req.file,
        labels:req.body.labels,
        color:req.body.color


    });
    newnote.save((err)=>{ 
        if(err){
            res.json({success:false, message:err});
        }else{
            res.json({success:true, message:'Note created successfully', newnote:newnote})
        }
    });


}

let getAllNotes = (req,res)=>{
    NoteModel.find({},).count((err,result)=>{
        if(err){
            console.log(err)
            logger.error(err.message, 'NoteController: getAllNotes', 10)
            let apiResponse = response.generate(true, 'Failed To Find Note Details', 500, null)
            res.send(apiResponse)
          }else if(check.isEmpty(result)){
            logger.info('No Notes Found', 'NoteController: getAllNotes')
            let apiResponse = response.generate(true, 'No Notes Found', 404, null)
               res.send(apiResponse)
  }else{
     let count =result;
     NoteModel.find()
     .select(' -__v -_id')
     .exec((err,result)=>{
        if(err){
            console.log(err)
                            logger.error(err.message, 'NoteController: getAllNotes', 10)
                            let apiResponse = response.generate(true, 'Failed To Find Note Details', 500, null)
                            res.send(apiResponse)
        }else if(check.isEmpty(result)){
            logger.info('No Notes found', 'NoteController: getAllProducts')
            let apiResponse = response.generate(true, 'No Notes found', 404, null)
            res.send(apiResponse)
        }else{
            let apiResponse = response.generate(false, 'All Note Details Found', 200, result);
            apiResponse.count = count
            res.send(apiResponse);
        }
     })
  }
    })
}
    



module.exports={
    createNote:createNote,
    getAllNotes:getAllNotes
}

