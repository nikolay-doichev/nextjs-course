const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'niko',
        mongodb_password: '7ZcOQQrDLkDSVFfX',
        mongodb_clustername: 'Cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }
  return {
    env: {
      mongodb_username: 'niko',
      mongodb_password: '7ZcOQQrDLkDSVFfX',
      mongodb_clustername: 'Cluster0',
      mongodb_database: 'my-site',
    },
  };
};
