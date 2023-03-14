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

export const fetchProductsList = async (paran) => {
  if (paran === undefined) {
    throw new Error('Termo de busca não informado');
  }
  const endres = `https://api.mercadolibre.com/sites/MLB/search?q=${paran}`;
  // fazer requisicao da api
  const requisicao = await fetch(endres);
  const data = await requisicao.json();
  return data.results;
};
