function calculateNumber(type, a, b) {
  if (Math.round(b) === 0) {
    return 'Error';
  } else if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    return Math.round(a) / Math.round(b);
  }
}

module.exports = calculateNumber;
