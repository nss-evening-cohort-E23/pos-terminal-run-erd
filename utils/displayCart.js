import renderToDom from './renderToDom';

const displayCart = (arr) => {
  let cartItems = '';
  let baseTotal = 0;
  arr.forEach((item) => {
    baseTotal += item.basePrice;
    cartItems += `
    <option>${item.itemName} - $${item.basePrice}</option>
    `;
  });

  const cartString = `
  <div class="form-group">
    <label for="exampleFormControlSelect2">Cart</label>
    <select multiple class="form-control" id="cart-box">
      <option id="cart-total" value="${baseTotal}">Total: $${baseTotal}</option>
      <option>------</option>
      ${cartItems}
    </select>
  </div>
  `;
  renderToDom('#cart-area', cartString);
};

export default displayCart;
