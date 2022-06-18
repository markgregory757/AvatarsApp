const db = require("./app/models");


const Users=db.user



const bcrypt=require("bcrypt");
const LocalStrategy=require('passport-local').Strategy


module.exports=function(passport){
     passport.use(new LocalStrategy ({ 
    usernameField: 'username',
    passwordField: 'password'
  }, function authenticateUser(username,password,done){
    
    Users.findOne({name:username},function(err,user){
        if(err){
            return done(err)
        }
        if(!user){
            return done(null,false)
        }
        console.log(password,user.password)
          bcrypt.compare(password,user.password,function (err,res) {
                 if(err) return done(err)
                 if(res === false){
                     return done(null,false)
                 }
                 return done(null,user)
             })

  }).clone().then(res=>console.log("worked"))
 }))

 passport.serializeUser((user,done)=>{

    done(null,user.id)
  })
  passport.deserializeUser((id,done)=>{
    
    Users.findById(id,function(err,user){
        done(err,user)
    })
  })
}



 