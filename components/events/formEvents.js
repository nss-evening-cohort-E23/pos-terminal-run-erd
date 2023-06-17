// import { getMenu, getSingleMenuItem } from '../../api/menuData';
// import { getOrder } from '../../api/orderData';

import { createOrder, getOrder, updateOrder } from '../../api/orderData';
// import orderForm from '../../pages/orderForm';
import { viewOrders } from '../../pages/orders';

const formEvents = () => {
  document.querySelector('#form-area').addEventListener('click', (e) => {
    if (e.target.id.includes('order-item')) {
      // const [, firebaseKey] = e.target.id.split('--');
      // getMenu().then((data) => {
      //   console.warn('Menu Data', data);
      // });
      // getOrder().then((data) => {
      //   console.warn('Order Data', data);
      // });
      // getSingleMenuItem(firebaseKey).then((data) => {
      //   console.warn('single menu', data);
      // });
    }
    if (e.target.id.includes('form-button')) {
      const payload = {
        isOpen: true,
        orderBasePrice: document.querySelector('#cart-total').value,
        orderDate: new Date(),
        orderDetails: document.querySelector('#cart-value').value,
        OrderEmail: document.querySelector('#form-email').value,
        orderName: document.querySelector('#form-name').value,
        orderPhone: document.querySelector('#form-phone').value,
        orderTip: 0,
        orderTotal: 0,
        orderType: document.querySelector('input[name= OrderRadio]:checked').value,
        paymentType: '',
        uid: '',
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrder().then((orders) => viewOrders(orders));
        });
      });
    }
  });
  // document.getElementById('#cart-box').contentWindow.location.reload(true);
};

export default formEvents;
