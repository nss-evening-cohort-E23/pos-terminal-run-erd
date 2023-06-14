const endPoint = 'https://run-erd-default-rtdb.firebaseio.com/';

const getOrder = () => new Promise((resolve, reject) => {
  fetch(`${endPoint}/order.json`, {
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

export default getOrder;
