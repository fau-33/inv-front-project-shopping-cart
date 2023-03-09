import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  const API_URL = "https://api.mercadolibre.com/sites/MLB/search?q=";
  const searchProduct = 'computador';
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList(searchProduct)
      expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList(searchProduct)
      expect(fetch).toHaveBeenCalledWith(API_URL + searchProduct)
  });

   it('Teste se o retorno da função fetchProductList com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch que já está importado no arquivo.', async () => {
      const data = await fetchProductsList(API_URL);
      expect(data).toEqual(computadorSearch);
    });
    it('Teste se, ao chamar a função fetchProductList sem argumento, retorna um erro com a mensagem: termo de busca não informado', async () => {
      try {
        await fetchProductsList()
      } catch(error) {
        expect(fetchProductsList()).rejects.toThrow(Error('Algum erro ocorreu, recarregue a página e tente novamente'))
      }
    });
});
