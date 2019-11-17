var express = require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
app.use(bodyParser.json());
Genre=require('./models/genres');

mongoose.connect('mongodb://localhost/bookstore',{useNewUrlParser:true},(err=>{if(!err){console.log('Bad')}
else {console.log('Error in DB connection:'+err)}}));

var db=mongoose.connection;
app.get('/',function(req,res){
    console.log("HEllo ");
    res.send('Please use')
    
});

app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
            console.log(err);
        }res.json(genres);
        
    });
});

app.post('/api/genres', (req, res) => {
	var genre= req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});
app.put('/api/genres/:_id', (req, res) => {
    var id=req.params._id;
	var genre= req.body;
	Genre.updateGenre(id,genre,{}, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});
app.listen(3000);

console.log('Running');
