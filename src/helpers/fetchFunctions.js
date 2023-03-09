export const fetchProduct = async (searchProductId) => {
  if (!searchProductId) throw new Error('ID não informado');

  try {
    const API_URL_ID = `https://api.mercadolibre.com/items/${searchProductId}`;
    const response = await fetch(API_URL_ID);
    const data = await response.json();
    return data;
  } catch (error) {
    error.message();
  }
};

export const fetchProductsList = async (searchProduct) => {
  if (!searchProduct) throw new Error('Termo de busca não encontrado');

  try {
    const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
    const response = await fetch(API_URL + searchProduct);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Algum erro ocorreu, recarregue a página e tente novamente');
  }
};
