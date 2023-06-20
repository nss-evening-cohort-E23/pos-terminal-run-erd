import {
  getOrder,
  deleteOrder,
  getSingleOrder,
  orderDetails
} from '../../api/orderData';
import { viewOrders } from '../../pages/orders';
import orderForm from '../../pages/orderForm';
import displayCart from '../../utils/displayCart';
<<<<<<< HEAD
import orderDetailsPage from '../../pages/orderDetails';
=======
import viewRevenue from '../../pages/revenue';
>>>>>>> develop

const domEvents = (user) => {
  document.querySelector('#landing-area').addEventListener('click', (e) => {
    if (e.target.id.includes('welcome-view')) {
      getOrder().then((orders) => viewOrders(orders));
    }

    if (e.target.id.includes('welcome-rev')) {
      viewRevenue();
    }

    // Click event to create an order
    if (e.target.id.includes('welcome-create')) {
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
  });
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view')) {
      getOrder().then(viewOrders);
    }
  });

  document.querySelector('#all-orders').addEventListener('click', (e) => {
    if (e.target.id.includes('detail-btn')) {
      orderDetails().then(orderDetailsPage);
    }
  });
};

export default domEvents;
