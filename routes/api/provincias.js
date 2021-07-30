const express = require("express");
const router = express.Router();

// Load Provincia model
const Provincia = require("../../models/Provincia");

// @route GET api/provincias/test
// @description tests provincias route
// @access Public
router.get("/test", (req, res) => res.send("provincias route testing!"));

// @route GET api/provincias
// @description Get all provincias
// @access Public
router.get("/", (req, res) => {
  Provincia.find()
    .then((provincias) => res.json(provincias))
    .catch((err) =>
      res
        .status(404)
        .json({ noprovinciasfound: "No Provincias found" })
    );
});

// @route GET api/provincias/:id
// @description Get single provincias by id
// @access Public
router.get("/:id", (req, res) => {
  Provincia.findById(req.params.id)
    .then((provincia) => res.json(provincia))
    .catch((err) =>
      res.status(404).json({ noprovinciafound: "No Book found" })
    );
});

// @route GET api/provincias
// @description add/save provincia
// @access Public
router.post("/", (req, res) => {
  Provincia.create(req.body)
    .then((provincia) =>
      res.json({
        msg: "Provincia added successfully",
        item: provincia,
      })
    )
    .catch((err) => {
      return res.status(400).json({ error: "Unable to add this book" });
    });
});

// @route GET api/provincias/:id
// @description Update prvincia
// @access Public
router.put("/:id", (req, res) => {
  Provincia.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((provincia) =>
      res.json({ msg: "Updated successfully", item: provincia })
    )
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/provincias/:id
// @description Delete book by id
// @access Public
router.delete("/:id", (req, res) => {
  Provincia.findByIdAndRemove(req.params.id, req.body)
    .then((provincia) =>
      res.json({
        mgs: "Establecimiento entry deleted successfully",
        item: provincia,
      })
    )
    .catch((err) =>
      res.status(404).json({ error: "No such a provincia" })
    );
});

module.exports = router;


