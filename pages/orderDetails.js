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
        <div id="all-orders" class="card" style="width: 17rem;">
          <div class="card-body">
          <h5 class="card-title">${item.itemName}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">$${item.basePrice}</h6>
          </div>
        </div>

    `;
  });

  domString += `
      <h1 class="card-title">${obj.orderName}'s Order</h1>
      <h6 id="phone-details" class="card-subtitle mb-2">${obj.orderPhone}</h6>
      <h3>Total: ${obj.orderBasePrice}</h3>
      <button type="button" id="close-order--${obj.firebaseKey}" class="btn btn-primary">Close Order</button>
      
          ${menuString}
       
      `;

  // <li class="list-group-item">${item.itemName} - $${item.basePrice}</li>

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
