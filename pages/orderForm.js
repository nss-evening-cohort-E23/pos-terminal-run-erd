import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import getMenu from '../api/menuData';

const orderForm = () => {
  clearDom();

  let domItems = '';
  getMenu().then((array) => {
    array.forEach((item) => {
      domItems += `
      ${item.itemName}
      `;
      console.warn(domItems);
    });
  });
  // renderToDom('#drop-items', domItems);

  const domString = `
  <form>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Order Name</label>
      <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Input Name">

      <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
      <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Input Phone Number">

      <label for="exampleFormControlInput1" class="form-label">Order Email</label>
      <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Input Email">
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="OrderRadio" id="phone-radio">
      <label class="form-check-label" for="phone-order">
        Phone Order
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="OrderRadio" id="walk-order">
      <label class="form-check-label" for="walk-order" checked>
        Walk In Order
      </label>
    </div>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <div item="drop-items" href=${domItems}></div>
      </ul>
    </div>
  </form>
  `;

  console.warn(domItems);

  renderToDom('#form-area', domString);
};

export default orderForm;
