const express = require("express");
const router = express.Router();

// Load Establecimiento model
const Establecimiento = require("../../models/Establecimiento");

// @route GET api/establecimientos/test
// @description tests establecimientos route
// @access Public
router.get("/test", (req, res) => res.send("establecimientos route testing!"));

// @route GET api/establecimientos
// @description Get all establecimientos
// @access Public
router.get("/", (req, res) => {
  Establecimiento.find()
    .then((establecimientos) => res.json(establecimientos))
    .catch((err) =>
      res
        .status(404)
        .json({ noestablecimientosfound: "No Establecimientos found" })
    );
});

// @route GET api/establecimientos/:id
// @description Get single establecimiento by id
// @access Public
router.get("/:id", (req, res) => {
  Establecimiento.findById(req.params.id)
    .then((establecimiento) => res.json(establecimiento))
    .catch((err) =>
      res.status(404).json({ noestablecimientofound: "No Book found" })
    );
});

// @route GET api/establecimientos
// @description add/save establecimiento
// @access Public
router.post("/", (req, res) => {
  Establecimiento.create(req.body)
    .then((establecimiento) =>
      res.json({
        msg: "Establecimiento added successfully",
        item: establecimiento,
      })
    )
    .catch((err) => {
      return res.status(400).json({ error: "Unable to add this book" });
    });
});

// @route GET api/establecimientos/:id
// @description Update establecimiento
// @access Public
router.put("/:id", (req, res) => {
  Establecimiento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((establecimiento) =>
      res.json({ msg: "Updated successfully", item: establecimiento })
    )
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/establecimientos/:id
// @description Delete book by id
// @access Public
router.delete("/:id", (req, res) => {
  Establecimiento.findByIdAndRemove(req.params.id, req.body)
    .then((establecimiento) =>
      res.json({
        mgs: "Establecimiento entry deleted successfully",
        item: establecimiento,
      })
    )
    .catch((err) =>
      res.status(404).json({ error: "No such a establecimiento" })
    );
});

module.exports = router;
