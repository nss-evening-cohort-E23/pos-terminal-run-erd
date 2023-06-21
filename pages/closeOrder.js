import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const closeOrder = (obj) => {
  clearDom();

  const domString = `
    <div>
      <h5>Close Order</h5>
      <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Action
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Cash</a></li>
          <li><a class="dropdown-item" href="#">Visa</a></li>
          <li><a class="dropdown-item" href="#">Master Card</a></li>
          <li><a class="dropdown-item" href="#">Discover</a></li>
          <li><a class="dropdown-item" href="#">Apple Pay</a></li>
          <li><a class="dropdown-item" href="#">Google Pay</a></li>
        </ul>
      </div>
      <h3>Total: ${obj.orderBasePrice}</h3>
      <label for="inputPassword5" class="form-label">Card Number</label>
      <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">
      <input class="form-control" type="text" placeholder="Tip Amount" aria-label="default input example">
    </div>
  `;

  renderToDom('#close-order', domString);
  console.warn(obj);
};

export default closeOrder;
