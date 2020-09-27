"use strict";
exports.__esModule = true;
var proprietario_1 = require("./proprietario");
var Endereco_1 = require("./Endereco");
var Marca_1 = require("./Marca");
var carro_1 = require("./carro");
var endereco = new Endereco_1["default"]('Horacio dePaula Ramos', 'Jardim Leoni', "lins", 'São Pulo', 16401380);
var proprietario = new proprietario_1["default"]('JAiro', 46046085803, 12345678898, endereco);
var marca = new Marca_1["default"]('renault', 10, '1920', 1001);
var carro = new carro_1["default"]("Ford KA", "preto", "2010", 1234321, proprietario, marca);
console.log(endereco, proprietario, marca, carro);