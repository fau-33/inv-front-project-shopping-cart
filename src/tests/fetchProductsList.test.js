import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';
// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });
  it('fetch é chamado ao executar fetchProductsList', async () => {
await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalled()
});
it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
  it('Teste se o retorno da função fetchProductList com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch que já está importado no arquivo.', async () => {
    const data = await fetchProductsList('computador')
    expect(data).toEqual(computadorSearch);
  });
  it('Teste se, ao chamar a função fetchProductList sem argumento, retorna um erro com a mensagem: termo de busca não informado', async () => {
    try {
      await fetchProductsList()
    } catch (error) {
    expect(fetchProductsList()).rejects.toThrow(Error('Termo de busca não informado'))
    }
  }
  )
});