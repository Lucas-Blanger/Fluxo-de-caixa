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

router.get("/excluir/:id", async function (req, res, next) {
  const id = req.params.id;

  try {
    await Caixa.destroy({
      where: { id: id },
    });
    res.redirect("/");
  } catch (err) {
    console.error("Erro ao excluir:", err);
    next(err);
  }
});

router.get("/adicionar", function (req, res) {
  res.render("adicionar");
});
router.post("/cadastrar", async function (req, res, next) {
  const { tipo, valor, status } = req.body;

  try {
    await Caixa.create({
      tipo,
      valor,
      status,
    });

    res.redirect("/");
  } catch (err) {
    console.error("Erro ao cadastrar:", err);
    next(err);
  }
});

module.exports = router;
