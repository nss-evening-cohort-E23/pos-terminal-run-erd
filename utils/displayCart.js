import renderToDom from './renderToDom';

const displayCart = (arr) => {
  let cartItems = '';
  let baseTotal = 0;
  let cartId = 0;
  arr.forEach((item) => {
    baseTotal += item.basePrice;
    cartItems += `
    <option id="cart-value--${cartId += 1}">${item.itemName} - $${item.basePrice}</option>
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
    <button class="btn btn-danger" id="delete-item--${cartId}">Remove Item(s)</button>
  `;
  renderToDom('#cart-area', cartString);
};

export default displayCart;
