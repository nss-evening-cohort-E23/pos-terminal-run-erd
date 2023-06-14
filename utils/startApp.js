// import getOrder from '../api/orderData';
import domBuilder from '../components/shared/domBuilder';
import landingPage from '../pages/landingPage';
// import { viewOrders } from '../pages/orders';

const startApp = () => {
  domBuilder();
  landingPage();

  // getOrder().then((cards) => viewOrders(cards));
};

export default startApp;
