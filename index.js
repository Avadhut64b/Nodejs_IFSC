const express = require('express');
const app = express();

var ifsc = require('ifsc-finder');

const bodyParser = require('body-parser');

app.set('view engine','ejs');

app.use(bodyParser());


app.get('/',(req,res)=> {

    res.render('index',{title:'IFSC Code Bank Information Finder',response:'',data:false})
    
    })


    app.post('/ifsc',(req,res) => {
        var code = req.body.ifsc
    
        if(ifsc.get(code)){
            ifsc.get(code).then(function(response) {
                console.log(response);
                res.render('index',{title:'IFSC Code Bank Information Finder',response:response,data:true})
            });
        }
        else{
    
        res.send("IFSC Code is wrong")
        }
    })

//LISTENING PORT
app.listen(4000,()=>{
    console.log("App is listening to the 4000");
})