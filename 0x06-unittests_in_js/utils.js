const Utils = {
  'calculateNumber': function (type, a, b) {
     if (type === 'SUM') {
       return Math.round(a) + Math.round(b);
     } else if (type === 'SUBTRACT') {
       return Math.round(a) - Math.round(b);
     } else if (type === 'DIVIDE') {
       if (Math.round(b) == 0) return 'Error';

       return Math.round(a) / Math.round(b);
     } else {
       return 'Error';
     } 
  },
}

module.exports = Utils;
