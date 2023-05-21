import { families } from './database/families';
import { products } from './database/products';
import showFamilies from './functions/showFamilies';
import showProducts from './functions/showProducts';

showFamilies(families);

showProducts(products);

function defineClick() {
  const productItems = document.querySelectorAll('.productItem');

  productItems.forEach((item) => {
    item.addEventListener('click', () => {
      setModal(Number(item.id));
    });
  });
}

defineClick();

function setModal(id: number) {
  const product = products.find((product) => product.id === id);

  const modalBody = document.getElementById('modalBody');

  if (product) {
    if (modalBody) {
      modalBody.innerHTML = `<h2 class="text-center">${product.name}</h2>
          
  <h4 class="text-center">Unidades por caixa: <span>${product.upc}</span></h4>
  
  <h4 class="text-center">NCM</h4>
  <p class="text-center">${product.ncm}</p>
  
  <h4 class="text-center">EAN</h4>
  <p class="text-center">${product.ean}</p>
  
  <h4 class="text-center">DUN</h4>
  <p class="text-center">${product.dun}</p>
  
  <h4 class="text-center">Preço custo</h4>
  <p class="text-center">R$ ${product.price.toFixed(2)}</p>
  
  <h4 class="text-center">Sugestão venda</h4>
  <p class="text-center">R$ ${product.suggestion.toFixed(2)}</p>`;
    }
  }
}
