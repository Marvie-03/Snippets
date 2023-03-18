const email = 'your-email';
const password = 'your-password';

fetch('https://account.magento.com/rest/V2/v2/session/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email,
    password
  })
})
.then(response => response.text())
.then(token => {
  "7d674f5817a34e2c8225c0be0579bf0b"
}, console.log(token))
.catch(error => console.error('Error during Magento Login',error));

