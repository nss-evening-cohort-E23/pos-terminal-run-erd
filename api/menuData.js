const endPoint = 'https://run-erd-default-rtdb.firebaseio.com/';

const getMenu = () => new Promise((resolve, reject) => {
  fetch(`${endPoint}/menu.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getMenu;

// array.forEach((item) => {
//     domItems += `
//     <li><a class="dropdown-item" href="#">${item.itemName}</a></li>
//     `;
//   });
