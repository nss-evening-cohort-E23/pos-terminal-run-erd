// import logoutButton from '../components/logoutButton';
// import navbar from '../components/navBar';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewRevenue = (arr) => {
  clearDom();
  let tableInfo = '';
  let num = 0;
  let grandTotal = 0;
  arr.forEach((obj) => {
    num += 1;
    grandTotal += obj.orderTotal;
    tableInfo += `
    <tr>
    <th scope="row">${num}</th>
    <td>${obj.orderName}</td>
    <td>${obj.orderEmail}</td>
    <td>${obj.orderTotal}</td>
  </tr>
    `;
  });
  const domString = `
  <h5>Total Revenue: $${grandTotal}</h5>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Order Total</th>
    </tr>
  </thead>
  <tbody>
    ${tableInfo}
  </tbody>
</table>`;

  renderToDom('#revenue', domString);
};
export default viewRevenue;
