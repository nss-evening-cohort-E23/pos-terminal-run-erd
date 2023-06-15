import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';
import client from './client';
import startApp from './startApp';
import clearDom from './clearDom';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp();
      // logoutButton();
    } else {
      // person is NOT logged in
      clearDom();
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
