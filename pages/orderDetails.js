// import navbar from '../components/navBar';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const orderDetailsPage = (obj) => {
  clearDom();
  // navbar();

  let domString = '';
  let menuString = '';

  obj.orderDetails.forEach((item) => {
    menuString += `
    <li class="list-group-item">${item.itemName} - $${item.basePrice}</li>
    `;
  });

  domString += `
      <h1>Total: ${obj.orderBasePrice}</h1>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${obj.orderName}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${obj.orderEmail}</h6>
          <h6 class="card-subtitle mb-2 text-body-secondary">${obj.orderPhone}</h6>

          <ul class="list-group">
            ${menuString}
          </ul>

          <a href="#" class="card-link">Remove Item</a>
        </div>
      </div>`;

  // for (let i = 0; i < obj.orderDetails.length(); i++) {
  //   domString += `
  //     <h1>Total: ${obj.orderBasePrice}</h1>
  //     <div class="card" style="width: 18rem;">
  //       <div class="card-body">
  //         <h5 class="card-title">${obj.orderDetails}</h5>
  //         <h6 class="card-subtitle mb-2 text-body-secondary">$${obj.basePrice}</h6>
  //         <a href="#" class="card-link">Remove Item</a>
  //       </div>
  //     </div>
  //   `;
  // }

  renderToDom('#order-details', domString);
  console.warn(obj);
};

export default orderDetailsPage;
