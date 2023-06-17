import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import { getMenu, getSingleMenuItem } from '../api/menuData';
import {
  createOrder, getOrder, updateOrder, getSingleOrder
} from '../api/orderData';
import { viewOrders } from './orders';

const orderForm = (obj = {}) => {
  clearDom();

  // Populate pulldown for menu items.
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
      <label for="name" class="form-label">Order Name</label>
      <input type="name" class="form-control" id="form-name" placeholder="Input Name" value="${obj.orderName || ''}" required>

      <label for="phone-number" class="form-label">Phone Number</label>
      <input type="name" class="form-control" id="form-phone" placeholder="Input Phone Number" value="${obj.orderPhone || ''}" required>

      <label for="order-email" class="form-label">Order Email</label>
      <input type="email" class="form-control" id="form-email" placeholder="Input Email" value="${obj.orderEmail || ''}" required>
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
      <button id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'form-button'}">Submit</button>
    </div>
  </form>
  `;

    let cartString = '';

    // Function to display the card once an item is chosen.
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
          <option>------</option>
          ${cartItems}
        </select>
      </div>
      `;
      renderToDom('#cart-area', cartString);
    };

    // Event listener that will add a menu item to cart when clicked on the dropdown.
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

      // Adding new order plus clearing cart
      if (e.target.id.includes('form-button')) {
        // cart = [];
        // document.querySelector('#form-area').innerHTML = '';
        const payload = {
          isOpen: true,
          orderBasePrice: document.querySelector('#cart-total'),
          orderDate: new Date(),
          orderDetails: cart,
          OrderEmail: document.querySelector('#form-email').value,
          orderName: document.querySelector('#form-name').value,
          orderPhone: document.querySelector('#form-phone').value,
          orderTip: 0,
          orderTotal: 0,
          // orderType: document.querySelector('input[name= OrderRadio]:checked').value,
          paymentType: '',
          uid: '',
        };

        createOrder(payload).then(({ name }) => {
          const patchPayload = { firebaseKey: name };

          updateOrder(patchPayload).then(() => {
            getOrder().then((orders) => viewOrders(orders));
          });
        });

        cart = [];
      }

      if (e.target.id.includes('update-order')) {
        const [, firebaseKey] = e.target.id.split('--');
        getSingleOrder(firebaseKey).then((item) => {
          cart = item.orderDetails;
          displayCart();

          const payload = {
            isOpen: true,
            orderBasePrice: document.querySelector('#cart-total'),
            orderDetails: cart,
            orderEmail: document.querySelector('#form-email').value,
            orderName: document.querySelector('#form-name').value,
            orderPhone: document.querySelector('#form-phone').value,
            firebaseKey,
          };

          updateOrder(payload).then(() => {
            getOrder().then(viewOrders);
          });
        });
        // const payload = {
        //   isOpen: true,
        //   orderBasePrice: document.querySelector('#cart-total'),
        //   orderDetails: cart,
        //   orderEmail: document.querySelector('#form-email').value,
        //   orderName: document.querySelector('#form-name').value,
        //   orderPhone: document.querySelector('#form-phone').value,
        //   firebaseKey,
        // };

        // updateOrder(payload).then(() => {
        //   getOrder().then(viewOrders);
        // });
      }
    });
    renderToDom('#form-area', domString);

    // Creation of a new order + clearing the cart on click.
    // document.querySelector('#form-area').addEventListener('click', (e) => {
    //   if (e.target.id.includes('form-button')) {
    //     // cart = [];
    //     // document.querySelector('#form-area').innerHTML = '';
    //     const payload = {
    //       isOpen: true,
    //       orderBasePrice: document.querySelector('#cart-total').value,
    //       orderDate: new Date(),
    //       orderDetails: cart,
    //       OrderEmail: document.querySelector('#form-email').value,
    //       orderName: document.querySelector('#form-name').value,
    //       orderPhone: document.querySelector('#form-phone').value,
    //       orderTip: 0,
    //       orderTotal: 0,
    //       orderType: document.querySelector('input[name= OrderRadio]:checked').value,
    //       paymentType: '',
    //       uid: '',
    //     };

    //     createOrder(payload).then(({ name }) => {
    //       const patchPayload = { firebaseKey: name };

    //       updateOrder(patchPayload).then(() => {
    //         getOrder().then((orders) => viewOrders(orders));
    //       });
    //     });

    //     cart = [];
    //   }
    // });
  });
  // renderToDom('#drop-items', domItems);
};

export default orderForm;
