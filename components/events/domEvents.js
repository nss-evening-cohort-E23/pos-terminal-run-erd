import {
  getOrder,
  deleteOrder,
  getSingleOrder,
  getClosedOrders,
} from '../../api/orderData';
import { viewOrders } from '../../pages/orders';
import orderForm from '../../pages/orderForm';
import displayCart from '../../utils/displayCart';
import orderDetailsPage from '../../pages/orderDetails';
import viewRevenue from '../../pages/revenue';
import closeOrder from '../../pages/closeOrder';
import landingPage from '../../pages/landingPage';
import navbar from '../navBar';

const domEvents = (user) => {
  document.querySelector('#landing-area').addEventListener('click', (e) => {
    if (e.target.id.includes('welcome-view')) {
      getOrder().then((orders) => viewOrders(orders));
    }

    if (e.target.id.includes('welcome-rev')) {
      navbar();
      getClosedOrders().then(viewRevenue);
    }

    // Click event to create an order
    if (e.target.id.includes('welcome-create')) {
      navbar();
      orderForm();
      console.warn(user.uid);
    }
  });

  document.querySelector('#all-orders').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('DELETE ORDER?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrder(firebaseKey).then(() => {
          getOrder().then(viewOrders);
        });
      }
    }

    if (e.target.id.includes('edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((orderObj) => {
        // console.warn(orderObj.orderDetails);
        let cart = [];
        orderForm(orderObj);
        cart = orderObj.orderDetails;
        displayCart(cart);
        // console.warn(cart);
      });
    }
  });
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create')) {
      orderForm();
    }

    if (e.target.id.includes('home')) {
      document.querySelector('#navigation').innerHTML = '';
      landingPage(user);
    }
  });
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view')) {
      getOrder().then(viewOrders);
    }

    if (e.target.id.includes('home')) {
      landingPage(user);
    }
  });

  document.querySelector('#all-orders').addEventListener('click', (e) => {
    if (e.target.id.includes('detail-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(orderDetailsPage);
    }
  });

  document.querySelector('#order-details').addEventListener('click', (e) => {
    if (e.target.id.includes('close-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(closeOrder);
    }
  });
};

export default domEvents;
