import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="main-div">
      <div id="navigation"></div>
      <div id="all-orders"></div>
      <div id="order-page"></div>
      <div>
        <div id="order-total"></div>
        <div id="order-details"></div>
      </div>
      <div id="close-order"></div>
      <div id="landing-area"></div>
      <div id="form-area"></div>
      <div id="cart-area"></div>
    </div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
