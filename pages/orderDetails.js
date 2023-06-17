import navbar from '../components/navBar';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const orderDetailsPage = (obj) => {
  clearDom();
  navbar();

  const domString1 = `
    <h1>Total: ${obj.orderBasePrice}</h1>
  `;
  renderToDom('#order-total', domString1);

  let domString2 = '';

  domString2 += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${obj.itemName}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">$${obj.basePrice}</h6>
          <a href="#" class="card-link">Remove Item</a>
        </div>
      </div> 
    `;
  renderToDom('#order-details', domString2);
};

export default orderDetailsPage;
