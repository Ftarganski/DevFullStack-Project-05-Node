const express = require("express");
const router = express.Router();

const Jwt = require("../utils/Jwt");
const BrandController = require("../controllers/BrandController");

const brandCtrl = new BrandController();
const jwt = new Jwt();

// RETURN ALL BRANDS
router.get("/", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if (result.status === 200) {
    result = await brandCtrl.getBrands(req.query);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

// RETURN ONE BRAND
router.get("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if (result.status === 200) {
    result = await brandCtrl.getBrand(req.params.id);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

// CREATE BRAND
router.post("/", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if (result.status === 200) {
    result = await brandCtrl.createBrand(req.body);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

// EDIT BRAND
router.patch("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if (result.status === 200) {
    result = await brandCtrl.updateBrand(req.params.id, req.body);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

// DELETE BRAND
router.delete("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if (result.status === 200) {
    result = await brandCtrl.deleteBrand(req.params.id);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

module.exports = router;
