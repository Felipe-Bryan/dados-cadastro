import { ProductType } from '../types/productType';

const showProducts = (array: ProductType[]) => {
  const familiesInHtml = document.querySelectorAll('.homeAccordion');

  array.forEach((item) => {
    for (let i = 0; i < familiesInHtml.length; i++) {
      if (item.family === familiesInHtml[i].id) {
        familiesInHtml[i].innerHTML += `
            <div class="container p-0">
              <div class="row m-0 p-1">
                <div data-bs-toggle="modal" data-bs-target="#productData" id="${item.id}" class="p-2 d-flex align-items-center productItem">${item.name}</div>
              </div>
              <hr class="m-0" />
            </div>`;
      }
    }
  });
};

export default showProducts;
