const express = require('express');
const Router = express.Router();
const appConfig = require('../config/db');
const noteController = require('../controllers/noteController');
//  const auth = require('../middlewares/auth');
const noteSchema = require('../models/note');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,image,cb){
      cb(null,'./uploads/');
    },
    filename: function(req,image,cb){
      cb(null,new Date().toISOString().replace(/[\/\\:]/g, "_") + image.originalname);
    }
  });

  const fileFilter = (req, image,cb)=>{
    if(image.mimetype ==='image/jpeg'|| image.mimetype ==='image/png'){
      cb(null, true);
    }else{   
    cb(null, false);
    }
  
  }
  const upload = multer({storage: storage, limits:{
    fileSize: 1024*1024*5
  },
  fileFilter:fileFilter
  });


module.exports.setRouter= (app)=>{
    let baseUrl = `${appConfig.apiVersion}/notes`;

    app.post(`${baseUrl}/create`,upload.single('image'), noteController.createNote);
    app.get(`${baseUrl}/all`, noteController.getAllNotes)

}