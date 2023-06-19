// import getOrder from '../api/orderData';
import navbar from '../components/navBar';
import domBuilder from '../components/shared/domBuilder';
import landingPage from '../pages/landingPage';
// import { viewOrders } from '../pages/orders';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';

const startApp = () => {
  domBuilder();
  landingPage();
  navbar();
  domEvents();
  formEvents();
  document.querySelector('#navigation').innerHTML = '';
  // getOrder().then((cards) => viewOrders(cards));
};

export default startApp;
