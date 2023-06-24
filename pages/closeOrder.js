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
          <button class="btn btn-success tip-btn" type="button" id="button-addon2--${obj.firebaseKey}">Confirm Tip</button>
        </div>
      </div>
      <h5>Tip: $${obj.orderTip}</h5>
      <h3 id="order-total" value="${total}">Total: $${total}</h3>
      <div class="col-auto my-1">
        <label class="mr-sm-2" for="inlineFormCustomSelect">Payment Type</label>
        <select class="custom-select mr-sm-2" id="form-type">
          <option selected>Choose...</option>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="apple-pay">Apple Pay</option>
          <option value="google-pay">Google Pay</option>
        </select>
      </div>
        <h4></h4>
      <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock" placeholder="Card Number">
      <div id="payment">
        <button type="button" class="btn btn-primary" id="submit-payment--${obj.firebaseKey}">Submit Payment</button>
      </div>
    </div>
  `;

  renderToDom('#close-order', domString);
  console.warn(obj);
};

export default closeOrder;
