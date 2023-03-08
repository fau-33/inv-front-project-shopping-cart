const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (searchProduct) => {
  if (!searchProduct) throw new Error('Termo de busca não encontrado');

  try {
    const response = await fetch(API_URL + searchProduct);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Algum erro ocorreu, recarregue a página e tente novamente');
  }
};
