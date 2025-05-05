const express = require("express");
const router = express.Router();
const Caixa = require("../models/caixa");

router.get("/", async function (req, res) {
  try {
    const extrato = await Caixa.findAll();
    let receitas = 0;
    let despesas = 0;

    for (const lancamento of extrato) {
      if (lancamento.status === 1) {
        receitas += lancamento.valor;
      } else if (lancamento.status === 0) {
        despesas += lancamento.valor;
      }
    }

    const valorTotal = receitas - despesas;

    res.render("index", {
      valorTotal,
      receitas,
      despesas,
      extrato: extrato,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
