const {calculateNumber} = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  result = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
