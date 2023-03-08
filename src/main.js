import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const searchProduct = 'computador';

document.querySelector('.cep-button').addEventListener('click', searchCep);

async function listagemDeProdutosNaPagina() {
  const requisicaoProdutos = await fetchProductsList(searchProduct);
  const secaoProdutos = document.querySelector('.products');

  requisicaoProdutos.forEach((product) => {
    const ProdutoEl = createProductElement(product);
    secaoProdutos.appendChild(ProdutoEl);
  });
}

listagemDeProdutosNaPagina();
