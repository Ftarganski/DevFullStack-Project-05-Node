const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();
const User = require("../controllers/UserController");

const userCtrl = new User();

//Verbos HTTP
//GET (recuperar informação do servidor)
//POST (enviar informação para criar algo no servidor)
//DELETE (excluir informação do servidos)
//PUT
//PATCH


//List all users
router.get("/", async (req, res) => {
  const result = userCtrl.getUsers();
  res.send(result);
});

//List one user
router.get("/:id", async (req, res) => {
  const result = userCtrl.getUser(req.params.id);
  res.send(result);
});

// //Create user
// router.get("/", async (req, res) => {
//   const result = userCtrl.getUsers();
//   res.send(result);
// });

// //Edit user
// router.get("/:id", async (req, res) => {
//   const result = userCtrl.getUsers();
//   res.send(result);
// });

// //Delete user
// router.get("/:id", async (req, res) => {
//   const result = userCtrl.getUsers();
//   res.send(result);
// });

module.exports = router;
