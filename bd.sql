create database fluxo_de_caixa;
use fluxo_de_caixa;

-- RECEITAS
INSERT INTO caixas (tipo, valor, status) VALUES ('Salário', 3500.00, 1);
INSERT INTO caixas (tipo, valor, status) VALUES ('Freelance', 1200.00, 1);
INSERT INTO caixas (tipo, valor, status) VALUES ('Venda de produto', 300.00, 1);

-- DESPESAS
INSERT INTO caixas (tipo, valor, status) VALUES ('Compra de pão', 12.50, 0);
INSERT INTO caixas (tipo, valor, status) VALUES ('Aluguel', 1300.00, 1);
INSERT INTO caixas (tipo, valor, status) VALUES ('Conta de luz', 250.75, 1);
INSERT INTO caixas (tipo, valor, status) VALUES ('Internet', 99.90, 1);
INSERT INTO caixas (tipo, valor, status) VALUES ('Combustível', 200.00, 0);
INSERT INTO caixas (tipo, valor, status) VALUES ('Supermercado', 480.30, 1);

use fluxo_de_caixa;
SELECT * FROM caixas;
