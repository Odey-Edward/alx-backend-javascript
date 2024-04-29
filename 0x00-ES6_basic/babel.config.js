module.exports = api => {
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ];

  return {
    presets,
  };
};

