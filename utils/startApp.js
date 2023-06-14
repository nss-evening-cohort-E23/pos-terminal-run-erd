import landingPage from '../pages/landingPage';
import navbar from '../components/navBar';
import domBuilder from '../components/shared/domBuilder';

const startApp = () => {
  domBuilder();
  navbar();
  landingPage();
};

export default startApp;
