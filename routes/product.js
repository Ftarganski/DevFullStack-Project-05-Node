const express = require("express");
const router = express.Router();

//List all products
router.get("/", async (req, res) => {
  res.send("rotaProduct");
});

//List one product
router.get("/:id", async (req, res) => {
  res.send("rotaProduct");
});

// //Create product
// router.get("/", async (req, res) => {
//   res.send("rotaProduct");
// });

// //Edit product
// router.get("/:id", async (req, res) => {
//   res.send("rotaProduct");
// });

// //Delete product
// router.get("/:id", async (req, res) => {
//   res.send("rotaProduct");
// });

module.exports = router;
