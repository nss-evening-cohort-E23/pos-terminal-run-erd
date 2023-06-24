// import getOrder from '../api/orderData';
import navbar from '../components/navBar';
import domBuilder from '../components/shared/domBuilder';
import landingPage from '../pages/landingPage';
// import { viewOrders } from '../pages/orders';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';

const startApp = (user) => {
  domBuilder();
  landingPage(user);
  navbar();
  domEvents(user);
  formEvents(user);
  document.querySelector('#navigation').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
  // getOrder().then((cards) => viewOrders(cards));
};

export default startApp;
