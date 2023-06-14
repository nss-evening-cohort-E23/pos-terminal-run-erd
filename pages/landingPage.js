import renderToDom from '../utils/renderToDom';

const landingPage = () => {
  const domString = `
  <h5>Welcome!</h5>
  <div id="welcome-btns">
    <button id="welcome-view" class="wel-btn">View Orders</button>
    <button id="welcome-create" class="wel-btn">Create Order</button>
    <button id="welcome-rev" class="wel-btn">View Revenue</button>
  </div>
  `;

  renderToDom('#landing-area', domString);
};

export default landingPage;
