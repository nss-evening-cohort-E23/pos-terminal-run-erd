import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import navbar from '../components/navBar';

const emptyOrder = () => {
  const domString = '<h1>No Items in Order</h1>';
  renderToDom('#order-page', domString);
};

const orderItems = (array) => {
  clearDom();
  navbar();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.itemName}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">$${item.basePrice}</h6>
          <a href="#" class="card-link" id="item-delete">Remove Item</a>
        </div>
      </div> 
    `;
  });

  renderToDom('#order-page', domString);
};

export { emptyOrder, orderItems };
