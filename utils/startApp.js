<<<<<<< HEAD
import navbar from '../components/navBar';
import domBuilder from '../components/shared/domBuilder';

const startApp = () => {
  domBuilder();
  navbar();
=======
// import getOrder from '../api/orderData';
import domBuilder from '../components/shared/domBuilder';
import landingPage from '../pages/landingPage';
// import { viewOrders } from '../pages/orders';

const startApp = () => {
  domBuilder();
  landingPage();

  // getOrder().then((cards) => viewOrders(cards));
>>>>>>> 0d250341b9e539fe6ed3b96e6dabeac501a56bcd
};

export default startApp;
