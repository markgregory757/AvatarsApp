const db = require("../models");
const Avtr = db.avtr;
// Create and Save a new Tutorial

exports.create = (req, res) => {
        // Validate request
        if (!req.body.name) {
          res.status(400).send({ message: "Content can not be empty!" });
          return;
        }
        
        // Create a Tutorial
        const avtr = new Avtr({
          name: req.body.name,
          powerType: req.body.powerType,
          powerlevel:req.body.powerlevel,
          health: req.body.health,
          victories:req.body.victories,
          published: req.body.published ? req.body.published : false
        });
        // Save Tutorial in the database
        avtr
          .save(avtr)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the avatar."
            });
          });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const avtr = req.query.name;
  var condition = avtr ? { avtr: { $regex: new RegExp(avtr), $options: "i" } } : {};
  avtr.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving avtr."
      });
    });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Avtr.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found avatar with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving avatar with id=" + id });
    });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Avtr.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update avatar with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "avatar was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Avtr.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete avatar with id=${id}. Maybe avatar was not found!`
        });
      } else {
        res.send({
          message: "avatar was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Avtr.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} avatar were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all avatar."
      });
    });
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Avtr.find({ published: true })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving avatar."
    });
  });
};
