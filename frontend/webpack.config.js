// This file is a workaround for webpack-dev-server configuration issues
// Note: You may need to run 'npm run eject' to customize webpack config fully
// This is a temporary fix for the allowedHosts error

module.exports = function override(config, env) {
  // Fix for webpack-dev-server allowedHosts error
  if (config.devServer) {
    config.devServer.allowedHosts = 'all';
  }
  
  return config;
};



