const express = require("express");
const router = express.Router();

// Load Localidad model
const Localidad = require("../../models/Localidad");

// @route GET api/localidades/test
// @description tests localidades route
// @access Public
router.get("/test", (req, res) => res.send("localidades route testing!"));

// @route GET api/localidades
// @description Get all localidades
// @access Public
router.get("/", (req, res) => {
  Localidad.find()
    .then((localidades) => res.json(localidades))
    .catch((err) =>
      res
        .status(404)
        .json({ nolocalidadesfound: "No Localidades found" })
    );
});

// @route GET api/localidades/:id
// @description Get single localidad by id
// @access Public
router.get("/:id", (req, res) => {
Localidad.findById(req.params.id)
    .then((localidad) => res.json(localidad))
    .catch((err) =>
      res.status(404).json({ nolocalidadfound: "No Book found" })
    );
});

// @route GET api/localidades
// @description add/save localidad
// @access Public
router.post("/", (req, res) => {
  Localidad.create(req.body)
    .then((localidad) =>
      res.json({
        msg: "Localidad added successfully",
        item: localidad,
      })
    )
    .catch((err) => {
      return res.status(400).json({ error: "Unable to add this book" });
    });
});

// @route GET api/localidades/:id
// @description Update localidad
// @access Public
router.put("/:id", (req, res) => {
  Localidad.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((localidad) =>
      res.json({ msg: "Updated successfully", item: localidad })
    )
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/localidades/:id
// @description Delete book by id
// @access Public
router.delete("/:id", (req, res) => {
  Localidad.findByIdAndRemove(req.params.id, req.body)
    .then((localidad) =>
      res.json({
        mgs: "Localidad entry deleted successfully",
        item: localidad,
      })
    )
    .catch((err) =>
      res.status(404).json({ error: "No such a establecimiento" })
    );
});

module.exports = router;
