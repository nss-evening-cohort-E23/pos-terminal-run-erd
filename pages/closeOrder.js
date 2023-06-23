import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const closeOrder = (obj) => {
  clearDom();
  // const basePrice = Number(obj.orderBasePrice);
  // const tip = document.getElementById('order-tip').value;
  // const orderPrice = obj.orderBasePrice;
  // const orderTotal = basePrice + tip;
  // const orderTotal = orderPrice + tip;
  const total = Number(obj.orderTip) + Number(obj.orderBasePrice);
  const domString = `
    <div>
      <h1>Close Order</h1>
      <div class="btn-group">
      </div>
      <h3>Total: ${obj.orderBasePrice}</h3>
      <div id="tip">
        <div class="input-group mb-3">
          <input type="text" id="order-tip" class="form-control" placeholder="Tip Amount" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary tip-btn" type="button" id="button-addon2--${obj.firebaseKey}">Confirm Tip</button>
        </div>
      </div>
      <h5>Tip: $${obj.orderTip}</h5>
      <h3 id="order-total" value="${total}">Total: $${total}</h3>
      <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         Payment Type
        </button>
        <ul class="dropdown-menu" id="payment-type">
          <li><a class="dropdown-item" value="cash" href="#">Cash</a></li>
          <li><a class="dropdown-item" value="visa" href="#">Visa</a></li>
          <li><a class="dropdown-item" value="master card" href="#">Master Card</a></li>
          <li><a class="dropdown-item" value="discover" href="#">Discover</a></li>
          <li><a class="dropdown-item" value="apple pay" href="#">Apple Pay</a></li>
          <li><a class="dropdown-item" value="google pay" href="#">Google Pay</a></li>
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
