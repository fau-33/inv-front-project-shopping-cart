import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  const API_URL_ID = 'https://api.mercadolibre.com/items/';
  const searchProductId = 'MLB1405519561';

  it('Verifica se "fetchProduct" é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('Ao executar "fetchProduct" com o argumento "MLB1405519561", fetch foi chamado', async () => {
    await fetchProduct(searchProductId);
    expect(fetch).toHaveBeenCalled();
  });

  it('Ao executar "fetchProduct" com o argumento "MLB1405519561", "fetch" é utiliza o endpoint correto', async () => {
    await fetchProduct(searchProductId);
    expect(fetch).toHaveBeenCalledWith(API_URL_ID + searchProductId);
  });

  it('Ao executar "fetchProduct" com o parâmetro "MLB1405519561", o retorno é um objeto igual "produto"', async () => {
    const results = await fetchProduct(searchProductId);
    expect(results).toEqual(product);
  });

  it('Ao executar "fetchProduct" sem argumento, a função retorna uma mensagem de erro.', () => {
    expect(fetchProduct()).rejects.toThrow('ID não informado');
  });

  it('Ao executar "fetchProduct" com argumento errado, a função retorna um erro.', () => {
    return expect(fetchProduct(searchProductId+'a')).rejects.toThrow('Deu ruim...!');
  });

});