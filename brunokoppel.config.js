module.exports = {
  
  apps : [{
    name      : "Client Side",
    script    : "nx serve brunokoppel.com --watch",
  },
  {
    name      : "API",
    script    : "nx serve api --watch",
  }
],
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload brunokoppel.config.js --env production',
      'pre-setup': ''
    }
  }
};