const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.send(
    {
      'payment_methods': {
        'credit_cards': true,
        'paypal': false
      }
    }
  );
});

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
