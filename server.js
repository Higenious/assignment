var express       =  require('express');
var bodyParser    =  require('body-parser');
var nodemon       =  require('nodemon');
var app           =  express();

app.use(express.static(__dirname + '/Client'));



app.get('/',  function(req, res){
    res.sendFile('index');
    console.get('index file serving ');
});


app.listen(3000, function(){
    console.log('app serving on 3000 port');
});