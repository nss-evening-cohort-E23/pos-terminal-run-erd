const endPoint = 'https://run-erd-default-rtdb.firebaseio.com/';

const getMenu = () => new Promise((resolve, reject) => {
  fetch(`${endPoint}/menu.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getMenu;
