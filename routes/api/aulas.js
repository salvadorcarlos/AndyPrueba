const express = require("express");
const router = express.Router();

// Load Aula model
const Aula = require("../../models/Aula");

// @route GET api/aulas/test
// @description tests aulas route
// @access Public
router.get("/test", (req, res) => res.send("aulas route testing!"));

// @route GET api/aulas
// @description Get all aulas
// @access Public
router.get("/", (req, res) => {
  Aula.find()
    .then((aulas) => res.json(aulas))
    .catch((err) =>
      res
        .status(404)
        .json({ noaulasfound: "No aulas found" })
    );
});

// @route GET api/aulas/:id
// @description Get single establecimiento by id
// @access Public
router.get("/:id", (req, res) => {
  Aula.findById(req.params.id)
    .then((aula) => res.json(aula))
    .catch((err) =>
      res.status(404).json({ noaulafound: "No Book found" })
    );
});

// @route GET api/aulas
// @description add/save aula
// @access Public
router.post("/", (req, res) => {
  Aula.create(req.body)
    .then((aula) =>
      res.json({
        msg: "Aula added successfully",
        item: aula,
      })
    )
    .catch((err) => {
      return res.status(400).json({ error: "Unable to add this book" });
    });
});

// @route GET api/aula/:id
// @description Update aula
// @access Public
router.put("/:id", (req, res) => {
  Aula.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((aula) =>
      res.json({ msg: "Updated successfully", item: aula })
    )
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/aula/:id
// @description Delete book by id
// @access Public
router.delete("/:id", (req, res) => {
  Aula.findByIdAndRemove(req.params.id, req.body)
    .then((aula) =>
      res.json({
        mgs: "Aula entry deleted successfully",
        item: aula,
      })
    )
    .catch((err) =>
      res.status(404).json({ error: "No such a aula" })
    );
});
module.exports = router;