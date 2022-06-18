const express = require("express");
const cookieParser = require('cookie-parser')
const cors = require("cors");
const passport=require('passport')

require('dotenv').config()

const bodyParser=require("body-parser")
const bcrypt=require("bcrypt")
const LocalStrategy=require('passport-local').Strategy
const app = express();



const session=require('express-session')

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  
  const Users=db.user

  app.use(cookieParser());
  app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
  app.use(session({
    secret:process.env.ACCESS_TOKEN_SECRET,
    resave:true,
    saveUnitialized:true,
  }))



  app.use(passport.initialize());
app.use(passport.session())
require('./passport.config')(passport)

// passport.serializeUser((user,done)=>{
//   done(null,user.id)
// })
// passport.deserializeUser((id,done)=>{
//   Users.findById(id,function(err,user){
//       done(err,user)
//   })
// })


  app.get("/", (req, res) => {
    res.json({ message: "i hope this works" });
  });
  // passport.use(new LocalStrategy ({ 
  //   usernameField: 'username',
  //   passwordField: 'password'
  // }, function authenticateUser(username,password,done){
    
  //   Users.findOne({name:username},function(err,user){
  //       if(err){
  //           return done(err)
  //       }
  //       if(!user){
  //           return done(null,false)
  //       }
  //       console.log(password,user.password)
  //         bcrypt.compare(password,user.password,function (err,res) {
  //                if(err) return done(err)
  //                if(res === false){
  //                    return done(null,false)
  //                }
  //                return done(null,user)
  //            })

//   }).clone().then(res=>console.log("worked"))
//  }))

  // simple route

  require("./app/routes/user.routes")(app);
  require("./app/routes/avtr.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
