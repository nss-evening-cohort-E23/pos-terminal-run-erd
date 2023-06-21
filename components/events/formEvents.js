import {
  getSingleOrder, getOrder, updateOrder, createOrder
} from '../../api/orderData';
import { viewOrders } from '../../pages/orders';
import { getSingleMenuItem } from '../../api/menuData';
import displayCart from '../../utils/displayCart';
// import orderDetailsPage from '../../pages/orderDetails';

let cart = [];

const formEvents = (user) => {
  document.querySelector('#all-orders').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((data) => {
        cart = data.orderDetails;
        console.warn(cart);
      });
    }
  });

  document.querySelector('#form-area').addEventListener('click', (e) => {
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((item) => {
        item.orderDetails.forEach((data) => {
          // cart.push(data);
          console.warn(cart);
          console.warn(data);
        });
      });

      const payload = {
        isOpen: true,
        orderBasePrice: document.querySelector('#cart-total').value,
        orderDetails: cart,
        orderEmail: document.querySelector('#form-email').value,
        orderName: document.querySelector('#form-name').value,
        orderPhone: document.querySelector('#form-phone').value,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        getOrder().then(viewOrders);
      });
      cart = [];
    }

    if (e.target.id.includes('order-item')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleMenuItem(firebaseKey).then((data) => {
        const payload = {
          itemName: data.itemName,
          basePrice: data.basePrice
        };
        cart.push(payload);
        displayCart(cart);
        console.warn(cart);
      });
    }

    if (e.target.id.includes('form-button')) {
      console.warn(user.uid);
      // cart = [];
      // document.querySelector('#form-area').innerHTML = '';
      const payload = {
        isOpen: true,
        orderBasePrice: document.querySelector('#cart-total').value,
        orderDate: new Date(),
        orderDetails: cart || 'error',
        orderEmail: document.querySelector('#form-email').value,
        orderName: document.querySelector('#form-name').value,
        orderPhone: document.querySelector('#form-phone').value,
        orderTip: 0,
        orderTotal: 0,
        orderType: document.querySelector('#form-type').value,
        paymentType: '',
        uid: user.uid,
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrder().then(viewOrders);
          // console.warn(firebaseKey);
        });
      });
      cart = [];
    }
  });

  document.querySelector('#cart-area').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-item')) {
      // const cartNum = document.querySelector('#cart-box').value;
      // const [, cartId] = e.target.id.split('--');
      const selectedItem = document.querySelector('#cart-area select').selectedIndex;

      // const index = cart.findIndex((item) => item.cartId === Number(cartId));
      cart.splice(selectedItem - 2, 1);
      displayCart(cart);
      console.warn(selectedItem);
    }
  });
};

export default formEvents;
