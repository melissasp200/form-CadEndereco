'use strict' //Ativa o modo restrito.
             // Este modo faz com que o JS opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de progamação /*Consumo de API - https://viacep.com.br/ */

//Função para limpar campos preenchidos
const limparFormulario = () => {

  document.getElementById('logradouro').value = '';
  document.getElementById('localidade').value = '';
  document.getElementById('uf').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('complemento').value = '';
  document.getElementById('numero').value = '';

}

//Verifica se o CEP é válido

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const 