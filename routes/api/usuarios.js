const express = require("express");
const router = express.Router();

// Load usuarios model
const Usuario = require("../../models/Usuario");

// @route GET api/usuarios/test
// @description tests usuarios route
// @access Public
router.get("/test", (req, res) => res.send("usuarios route testing!"));

// @route GET api/usuarios
// @description Get all usuarios
// @access Public
router.get("/", (req, res) => {
  Usuario.find()
    .then((usuarios) => res.json(usuarios))
    .catch((err) =>
      res
        .status(404)
        .json({ nousuariosfound: "No Usuarios found" })
    );
});
// @route GET api/usuarios/:id
// @description Get single usuario by id
// @access Public
router.get("/:id", (req, res) => {
  Usuario.findById(req.params.id)
    .then((usuario) => res.json(usuario))
    .catch((err) =>
      res.status(404).json({ nousuariofound: "No Book found" })
    );
});


// @route GET api/usuarios
// @description add/save usuario
// @access Public
router.post("/", (req, res) => {
  Usuario.create(req.body)
    .then((usuario) =>
      res.json({
        msg: "Usuario added successfully",
        item: usuario,
      })
    )
    .catch((err) => {
      return res.status(400).json({ error: "Unable to add this book" });
    });
});

// @route GET api/usuarios/:id
// @description Update usuario
// @access Public
router.put("/:id", (req, res) => {
  Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((usuario) =>
      res.json({ msg: "Updated successfully", item: usuario })
    )
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/usuarios/:id
// @description Delete book by id
// @access Public
router.delete("/:id", (req, res) => {
  Usuario.findByIdAndRemove(req.params.id, req.body)
    .then((usuario) =>
      res.json({
        mgs: "Usuario entry deleted successfully",
        item: usuario,
      })
    )
    .catch((err) =>
      res.status(404).json({ error: "No such a usuario" })
    );
});

module.exports = router;
