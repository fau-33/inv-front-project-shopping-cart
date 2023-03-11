import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
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
fetchProduct('MLB1405519561');

const salvandoNoStorange = getSavedCartIDs
  .map(async (element) => fetchProduct(element));

const cartoesOrdenadas = async () => {
  const promessas = await Promise.all(salvandoNoStorange);
  promessas.forEach((element) => {
    document
      .querySelector('.cart__products')
      .appendChild(createCartProductElement(element));
  });
};

cartoesOrdenadas();
