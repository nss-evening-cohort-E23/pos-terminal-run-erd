const clearDom = () => {
  document.querySelector('#landing-area').innerHTML = '';
  document.querySelector('#order-page').innerHTML = '';
  document.querySelector('#all-orders').innerHTML = '';
  document.querySelector('#form-area').innerHTML = '';
  document.querySelector('#cart-area').innerHTML = '';
};

export default clearDom;
