module.exports = (app) => {
    const avtr = require("../controllers/avtr.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", avtr.create);
    // Retrieve all user
    router.get("/", avtr.findAll);
    // Retrieve all published user
    router.get("/published", avtr.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", avtr.findOne);
    // Update a Tutorial with id
    router.put("/:id", avtr.update);
    // Delete a Tutorial with id
    router.delete("/:id", avtr.delete);
    // Create a new Tutorial
    router.delete("/", avtr.deleteAll);
    app.use('/api/avtr', router);
  };