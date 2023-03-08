import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const searchProduct = 'computador';

document.querySelector('.cep-button').addEventListener('click', searchCep);

function criaLoadingDeTexto(textoCarregando, classeLoading) {
  const loaderesSectionElemento = document.querySelector('.container');
  const loaderesPElemento = document.createElement('p');

  loaderesPElemento.innerText = textoCarregando;
  loaderesPElemento.classList.add(classeLoading);
  loaderesSectionElemento.appendChild(loaderesPElemento);
}

function remuve() {
  document.querySelector('.loading').remove();
}

async function listagemDeProdutosNaPagina() {
  try {
    criaLoadingDeTexto('carregando...', 'loading');
    const requisicaoProdutos = await fetchProductsList(searchProduct);
    const secaoProdutos = document.querySelector('.products');
    remuve();

    requisicaoProdutos.forEach((product) => {
      const ProdutoEl = createProductElement(product);
      secaoProdutos.appendChild(ProdutoEl);
    });
  } catch (error) {
    remuve();
    criaLoadingDeTexto(error.message, 'error');
  }
}

listagemDeProdutosNaPagina();
