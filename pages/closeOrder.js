import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const closeOrder = () => {
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
      <label for="inputPassword5" class="form-label">Password</label>
      <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">
      <input class="form-control" type="text" placeholder="Tip Amount" aria-label="default input example">
    </div>
  `;

  renderToDom('#close-order', domString);
};

export default closeOrder;
