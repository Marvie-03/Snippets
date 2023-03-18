const email = "your-email";
const password = "password";
const baseUrl = "/v2/session/create";

// Send login request to Magento REST API
fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: email,
    password: password
  })
})
.then(response => response.json())
.then(token => {
  // Token received, save it for future requests
  "7e2c46afdf809f44854056d08e507be832976fed"
  console.log(token);
})
.catch(error => {
  console.error(error);
});
