 var express = require('express');
 var router = express.Router();
 var models = require('../models/schema');
 var mongoose = require("mongoose");
 router.route('/')
  .get(function(req, res){
    models.User.find()
    .exec(function(error,users){
    	if (error) {
            	res.json({ message: 'error' });
            }else{
                models.User.count({}, function(err, counter){
                	res.json({total: counter, data: users})
                })
            }
    })
  })
  .post(function(req, res){
  	models.User({
  		name 		: req.body.name,
  		email 		: req.body.email,
  		password 	: req.body.password
  	})
  	.save(function(error){
  		if (error) res.json({ message: 'error' });
  		else res.json({message: 'ok'})
  	})
  })
  .delete(function(req,res){
  	models.User.remove({},function(err) {
            if (err){
                res.json({ message: 'error' });
            }else{
            	res.json({ message: 'Deleted' });
        	}
        });
  })
  .put(function(req,res){
  	models.User.findById(req.body.user_id, function(error, user){
  		if(error) res.json({message: 'error'});
  		user.name = req.body.name,
  		user.email = req.body.email,
  		user.password = req.body.password

  		user.save(function(err){
  			if(err) res.json({message: 'error'})
  			res.json({message: 'ok'})
  		})
  	})
  })
 module.exports = router;
