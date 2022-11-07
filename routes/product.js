const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/ProductController');

const productCtrl = new ProductController();

//List all products
router.get("/", async (req, res) => {
  let result = productCtrl.getProducts();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  let result = productCtrl.getProducts(req.params.id);
  res.send(result);
});

// //List one product
// router.post("/:id", async (req, res) => {
//   let result = productCtrl.getProduct();
//   res.send(result);
// });

// //Create product
// router.put("/", async (req, res) => {
//   res.send({});
// });

// //Edit product
// router.patch("/:id", async (req, res) => {
//   res.send({});
// });

// //Delete product
// router.delete("/:id", async (req, res) => {
//   res.send({});
// });

module.exports = router;
