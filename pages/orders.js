// import navEvents from '../components/events/navEvents';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navBar';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDom('#all-orders', domString);
};

const viewOrders = (array) => {
  clearDom();
  navbar();
  logoutButton();
  // navEvents();
  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${item.orderName}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.orderType}</h6>
        <a href="#" class="card-link" id="edit-btn--${item.firebaseKey}">Edit Order</a>
        <a href="#" class="card-link" id="delete-btn--${item.firebaseKey}">Delete Order</a>
        <a href="#" class="card-link" id="detail-btn--${item.firebaseKey}">Order Details</a>
      </div>
    </div>
    `;
  });

  renderToDom('#all-orders', domString);
};

export { emptyOrders, viewOrders };
