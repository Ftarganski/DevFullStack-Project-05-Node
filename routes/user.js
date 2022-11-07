const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Exibe todos usuários");
});

router.get("/:id", async (req, res) => {
    res.send(`Exibe um usuário ${req.params.id}`);
  });

module.exports = router;