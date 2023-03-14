export const getAddress = async (CEP) => {
  if (!CEP) {
    throw new Error('Forneça um CEP');
  }
  try {
    const [dataApi, data] = await Promise.all([
      fetch(`https://cep.awesomeapi.com.br/json/${CEP}`).then((response) => response.json()),
      fetch(`https://brasilapi.com.br/api/cep/v2/${CEP}`).then((response) => response.json()),
    ]);
    return dataApi ?? data;
  } catch (error) {
    throw new Error('Não foi possível obter o endereço para o CEP fornecido.');
  }
};

export async function searchCep() {
  const cartAddressSpan = document.querySelector('.cart__address');
  const cepbutton = document.querySelector('.cep-button');
  cepbutton.addEventListener('click', async function () {
    const cepInput = document.querySelector('.cep-input').value;
    const {
      address,
      street,
      district,
      neighborhood,
      state,
      city,
      message,
    } = await getAddress(cepInput);
    if (message) {
      cartAddressSpan.innerHTML = '';
      cartAddressSpan.innerHTML = message;
      throw new Error(message);
    }
    cartAddressSpan.innerHTML = '';
    cartAddressSpan.innerHTML = `${address || street
    } - ${district || neighborhood} - ${city} - ${state}`;
  });
}
