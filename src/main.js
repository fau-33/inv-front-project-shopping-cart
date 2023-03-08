import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const searchProduct = 'computador';

document.querySelector('.cep-button').addEventListener('click', searchCep);

function criaLoadingDeTexto() {
  const loaderesSectionElemento = document.querySelector('.container');
  const loaderesPElemento = document.createElement('p');
  loaderesPElemento.innerText = 'carregando...';
  loaderesPElemento.classList.add('loading');
  loaderesSectionElemento.appendChild(loaderesPElemento);
}

async function listagemDeProdutosNaPagina() {
  criaLoadingDeTexto();
  const requisicaoProdutos = await fetchProductsList(searchProduct);
  const secaoProdutos = document.querySelector('.products');

  requisicaoProdutos.forEach((product) => {
    const ProdutoEl = createProductElement(product);
    secaoProdutos.appendChild(ProdutoEl);
  });
}

listagemDeProdutosNaPagina();
