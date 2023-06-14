import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="main-div">
    <div id="navigation"></div>
    </div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
