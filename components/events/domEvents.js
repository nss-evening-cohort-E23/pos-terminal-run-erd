import { getOrder, deleteOrder } from '../../api/orderData';
import { viewOrders } from '../../pages/orders';
import orderForm from '../../pages/orderForm';

const domEvents = () => {
  document.querySelector('#landing-area').addEventListener('click', (e) => {
    if (e.target.id.includes('welcome-view')) {
      getOrder().then((orders) => viewOrders(orders));
    }

    // Click event to create an order
    if (e.target.id.includes('welcome-create')) {
      orderForm();
    }
  });

  document.querySelector('#order-page').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('DELETE ORDER?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrder(firebaseKey).then(() => {
          getOrder().then(viewOrders);
        });
      }
    }
  });
};

export default domEvents;
