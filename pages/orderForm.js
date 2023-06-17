import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import { getMenu, getSingleMenuItem } from '../api/menuData';

const orderForm = () => {
  clearDom();

  let domItems = '';
  getMenu().then((array) => {
    array.forEach((item) => {
      domItems += `
      <a class="dropdown-item" id="order-item--${item.firebaseKey}" href="#">${item.itemName} - $${item.basePrice}</a>
      `;
    });

    let cart = [];
    let cartItems = '';

    // cart.forEach((item) => {
    //   cartItems = `
    //   <option>${item.itemName}</option>
    //   `;
    // });

    const domString = `
  <form>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Order Name</label>
      <input type="name" class="form-control" id="form-name" placeholder="Input Name">

      <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
      <input type="name" class="form-control" id="form-phone" placeholder="Input Phone Number">

      <label for="exampleFormControlInput1" class="form-label">Order Email</label>
      <input type="email" class="form-control" id="form-email" placeholder="Input Email">
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="OrderRadio" id="phone-radio" value="phoned-in">
      <label class="form-check-label" for="phone-order">
        Phone Order
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="OrderRadio" id="walk-order" value="walk-in">
      <label class="form-check-label" for="walk-order" checked>
        Walk In Order
      </label>
    </div>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <div item="drop-items">${domItems}</div>
      </ul>
      <button id="form-button">Submit</button>
    </div>
  </form>
  `;

    let cartString = '';

    const displayCart = () => {
      cartItems = '';
      let baseTotal = 0;
      cart.forEach((item) => {
        baseTotal += item.basePrice;
        cartItems += `
        <option>${item.itemName} - $${item.basePrice}</option>
        `;
      });

      cartString = `
      <div class="form-group">
        <label for="exampleFormControlSelect2">Cart</label>
        <select multiple class="form-control" id="cart-box">
          <option id="cart-total" value="${baseTotal}">Total: $${baseTotal}</option>
          <option id="cart-value" value="${cart}">------</option>
          ${cartItems}
        </select>
      </div>
      `;
      renderToDom('#cart-area', cartString);
    };

    document.querySelector('#form-area').addEventListener('click', (e) => {
      if (e.target.id.includes('order-item')) {
        const [, firebaseKey] = e.target.id.split('--');

        getSingleMenuItem(firebaseKey).then((data) => {
          const payload = {
            itemName: data.itemName,
            basePrice: data.basePrice
          };
          cart.push(payload);
          displayCart();
        });
      }
    });
    renderToDom('#form-area', domString);

    // clearing the cart on click event.
    document.querySelector('#form-area').addEventListener('click', (e) => {
      if (e.target.id.includes('form-button')) {
        cart = [];
        document.querySelector('#form-area').innerHTML = '';
      }
    });
  });
  // renderToDom('#drop-items', domItems);
};

export default orderForm;
