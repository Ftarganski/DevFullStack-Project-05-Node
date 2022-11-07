const express = require("express");
const router = express.Router();

//List all categorys
router.get("/", async (req, res) => {
  res.send({});
});

//List one category
router.post("/:id", async (req, res) => {
  res.send({});
});

//Create category
router.put("/", async (req, res) => {
  res.send({});
});

//Edit category
router.patch("/:id", async (req, res) => {
  res.send({});
});

//Delete category
router.delete("/:id", async (req, res) => {
  res.send({});
});

module.exports = router;
