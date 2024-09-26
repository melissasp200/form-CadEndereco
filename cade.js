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

const eNumero = (numero) => /^[0-9]+$/.test(numero); //verifica a combinação
const cepValido = (cep) => cep.length == 8 && eNumero(cep); //verifica a quantidade se a quantidade de caractéres é igual a 8

const preencherFormulario = (endereco) => {

  document.getElementById('logradouro').value = endereco.logradouro;
  document.getElementById('localidade').value = endereco.localidade;
  document.getElementById('bairro').value = endereco.bairro;
  document.getElementById('uf').value = endereco.uf;


}

//Função para consumo de API ViaCEP
const pesquisarCep = async () => {  //função assíncrona

  limparFormulario();
  const url = `http://viacep.com.br/ws/${cep.value}/json/`;

  if (cepValido(cep.value)) {

    const dados = await fetch(url);     //fetch: método do js que faz uma requisição pro viacep (url). 
    const adress = await dados.json();   //await: tipo um comando de espera.

    console.log(adress);

    if (adress.hasOwnProperty('erro')) {  // metodo que retorna "um verdadeiro ou falso" indicando se este método object tem a propriedade especificada como sua própria propriedade ; verifica se foi erro nesse caso.

      alert('CEP não encontrado');

    } else {
      preencherFormulario(adress);
    }
  } else {
    alert('CEP Incorreto');
  }

}

//Chama o escutador para disparar ação de preenchimento

document.getElementById('cep').addEventListener('focusout', pesquisarCep);  