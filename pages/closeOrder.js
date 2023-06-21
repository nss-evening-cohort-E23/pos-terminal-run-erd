import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const closeOrder = (obj) => {
  clearDom();
  const basePrice = Number(obj.orderBasePrice);
  const tip = Number(obj.orderTip);
  // const orderPrice = obj.orderBasePrice;
  const orderTotal = basePrice + tip;
  // const orderTotal = orderPrice + tip;
  const domString = `
    <div>
      <h1>Close Order</h1>
      <div class="btn-group">
      </div>
      <h3>Total: ${obj.orderBasePrice}</h3>
      <div id="tip">
        <input class="form-control" id="order-tip--${obj.firebaseKey}" type="text" placeholder="Tip Amount" aria-label="default input example">
      </div>
      <h3 id="order-total">Total: ${orderTotal}</h3>
      <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         Payment Type
        </button>
        <ul class="dropdown-menu" id="payment-type">
          <li><a class="dropdown-item" href="#">Cash</a></li>
          <li><a class="dropdown-item" href="#">Visa</a></li>
          <li><a class="dropdown-item" href="#">Master Card</a></li>
          <li><a class="dropdown-item" href="#">Discover</a></li>
          <li><a class="dropdown-item" href="#">Apple Pay</a></li>
          <li><a class="dropdown-item" href="#">Google Pay</a></li>
        </ul>
      <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock" placeholder="Card Number">
      <div id="payment">
        <button type="button" class="btn btn-outline-primary" id="submit-payment--${obj.firebaseKey}">Submit Payment</button>
      </div>
    </div>
  `;

  renderToDom('#close-order', domString);
  console.warn(obj);
};

export default closeOrder;
