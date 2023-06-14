import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDom('#order-page', domString);
};

const viewOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${item.orderName}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.orderType}</h6>
        <a href="#" class="card-link">Edit Order</a>
        <a href="#" class="card-link">Delete Order</a>
      </div>
    </div>
    `;
  });

  renderToDom('#order-page', domString);
};

export { emptyOrders, viewOrders };
