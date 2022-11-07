const express = require("express");
const router = express.Router();

//List all categorys
router.get("/", async (req, res) => {
  res.send("rotaCategory");
});

//List one category
router.get("/:id", async (req, res) => {
  res.send("rotaCategory");
});

// //Create category
// router.get("/", async (req, res) => {
//   res.send("rotaCategory");
// });

// //Edit category
// router.get("/:id", async (req, res) => {
//   res.send("rotaCategory");
// });

// //Delete category
// router.get("/:id", async (req, res) => {
//   res.send("rotaCategory");
// });

module.exports = router;
