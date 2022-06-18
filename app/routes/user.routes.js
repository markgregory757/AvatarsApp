const passport=require('passport')


module.exports = (app) => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
    

        router.post('/login',(req,res,next)=>{
        passport.authenticate('local',(err,user,info)=>{
          if(err)throw err;
          if(!user)res.send(" no user exist")
          else{
            req.login(user,err=>{
              if(err)throw err;
console.log('authenticated')
              res.send({user})
              console.log(req.user)
            })
          }
        })(req,res,next)
      })

    // Create a new Tutorial    
    router.post("/", user.create);
    // Retrieve all user
    router.get("/", user.findAll);
    // Retrieve all published user
    router.get("/published",user.findAllPublished);


    // Retrieve a single Tutorial with id
    router.get("/:id", user.findOne);
    // Update a Tutorial with id
    router.put("/:id", user.update);
    // Delete a Tutorial with id
    router.delete("/:id", user.delete);
    // Create a new Tutorial
    router.delete("/", user.deleteAll);
    app.use('/api/user', router);
  };