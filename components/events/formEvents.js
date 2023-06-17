// import { getMenu, getSingleMenuItem } from '../../api/menuData';
// import { getOrder } from '../../api/orderData';

import orderForm from '../../pages/orderForm';

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
      orderForm();
    }
  });
  // document.getElementById('#cart-box').contentWindow.location.reload(true);
};

export default formEvents;
