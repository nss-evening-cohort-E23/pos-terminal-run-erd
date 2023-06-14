// import getOrder from '../api/orderData';
import navbar from '../components/navBar';
import domBuilder from '../components/shared/domBuilder';
import landingPage from '../pages/landingPage';
// import { viewOrders } from '../pages/orders';

const startApp = () => {
  domBuilder();
  landingPage();
  navbar();

  // getOrder().then((cards) => viewOrders(cards));
};

export default startApp;
