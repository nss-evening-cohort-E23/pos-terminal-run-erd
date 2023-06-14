// import getOrder from '../api/orderData';
import domBuilder from '../components/shared/domBuilder';
import landingPage from '../pages/landingPage';
// import { viewOrders } from '../pages/orders';
import domEvents from '../components/events/domEvents';

const startApp = () => {
  domBuilder();
  landingPage();
  domEvents();

  // getOrder().then((cards) => viewOrders(cards));
};

export default startApp;
