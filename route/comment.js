/**
 * 
 * @authors wpzheng (wenzheng@tencent.com)
 * @date    2017-04-20 14:50:38
 * @version 0.0.1
 */
var express = require("express");
var comment = express.Router();
var fs = require("fs");



comment.post("/list",function(req,res){
	var data = fs.readFileSync("data/comment.json","utf-8") + "";
	var jsData = JSON.parse(data);
	res.render("comment.ejs",{commentData:jsData});
})

comment.get("/list",function(req,res){
	var data = fs.readFileSync("data/comment.json","utf-8") + "";
	var jsData = JSON.parse(data);
	res.render("comment.ejs",{commentData:jsData});
})

module.exports = comment;