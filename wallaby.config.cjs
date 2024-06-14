module.exports = () => {
  process.env.TZ = 'UTC';

  return {
    autoDetect: true,
    env: {
      type: 'node',
      params: {
        runner: '--experimental-vm-modules',
      },
    },
  };
};
