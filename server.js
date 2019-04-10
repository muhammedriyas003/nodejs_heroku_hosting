

const x=require('express');//loading express to x
const y=require('express-handlebars'); //loading express handler to y

var app=x(); //assign x to app

app.engine('handlebars',y({defaultLayout:'mainpage'})); //setup template engine and setting a layout page "main page"
app.set('view engine','handlebars');
app.use(x.static('views/static')); //to use static contents like images and styles
app.use(x.urlencoded()); //data fetch from url

app.post('/login',(req,res)=>{

    var user=req.body.username;
    var pass=req.body.password;

    if (user==admin && pass==1234)
    {
        res.send("success");
    }
    else
    {
        res.send("failed");
    }
})

app.get('/home',(req,res)=>{

    res.render('home',{name:'Riyaz'});
});

app.get('/index',(req,res)=>{

    res.render('index');
});

app.get('/about',(req,res)=>{

    res.render('about');// res to send values to user
});
app.get('/gallery',(req,res)=>{

    res.render('gallery');
});

app.post('/getdata',(req,res)=>{

    var name=req.body.name; // req to read data from user
    var address=req.body.address;
    var mobile=req.body.mobile;
     res.send(name+"<br>"+address+"<br>"+mobile+"<br>");

});
app.listen(process.env.PORT || 3003,()=>{
    console.log('app running successfully');
});

