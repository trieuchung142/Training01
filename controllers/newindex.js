var express = require('express');
var router = express.Router();
var request = require('request');

// router.route('/')
// 	.get(function(req, res){
// 		res.render('index')
// 	})
router.route('/')
	.get(function(req, res){
		var option = {
			url: "http://localhost:5000/api/user",
			method: 'get'
		};
		request(option, function (error, response, list_user) {
			if(!error && response.statusCode == 200){
				res.render('showconfirm',{
					user: JSON.parse(list_user).data
				})	
			}
		})
		
	})
 module.exports = router;