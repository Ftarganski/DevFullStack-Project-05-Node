const express = require("express");
const router = express.Router();

const Jwt = require("../utils/Jwt");
const User = require("../controllers/UserController");

const userCtrl = new User();
const jwt = new Jwt();

// RETURN ALL USERS
router.get("/", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if (result.status === 200) {
    result = await userCtrl.getUsers(req.query);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

// RETURN ONE USER
router.get("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if (result.status === 200) {
    result = await userCtrl.getUser(req.params.id);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

// CREATE USER
router.post("/", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if (result.status === 200) {
    result = await userCtrl.createUser(req.body);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

// EDIT USER
router.patch("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if (result.status === 200) {
    result = await userCtrl.updateUser(req.params.id, req.body);
  }

  res.statusCode = result.status;
  res.send(result.result);
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if (result.status === 200) {
    result = await userCtrl.deleteUser(req.params.id);
  }

  res.statusCode = result.status;
  res.send(result.result);
});

module.exports = router;
