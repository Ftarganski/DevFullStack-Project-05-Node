const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();
const User = require("../controllers/UserController");

const userCtrl = new User();

//Verbos HTTP
//GET (recuperar informação do servidor)
//POST (enviar informação para criar algo no servidor)
//PUT (editar todas as informações de um dado no servidor)
//PATCH (editar as informações parciais de um dado no servidor)
//DELETE (excluir informação do servidor)


//List all users
router.get("/", async (req, res) => {
  const result = userCtrl.getUsers();
  res.send(result);
});

//List one user
router.post("/:id", async (req, res) => {
  const result = userCtrl.getUser(req.params.id);
  res.send(result);
});

//Create user
router.put("/", async (req, res) => {
  const result = userCtrl.getUsers();
  res.send(result);
});

//Edit user
router.patch("/:id", async (req, res) => {
  const result = userCtrl.getUsers();
  res.send(result);
});

//Delete user
router.delete("/:id", async (req, res) => {
  const result = userCtrl.getUsers();
  res.send(result);
});

module.exports = router;
