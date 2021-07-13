module.exports = {
      apps : [{
        name:"ECOM-NEXT",
        script: 'npm',
        args: 'run start',
        watch: '.'
      }],
    
      deploy : {
        production : {
          "user" : 'ubuntu',
          "host" : '107.21.225.214',
          "ref"  : 'origin/master',
          "repo" : 'git@bitbucket.org:edureka/ecom_react.git',
          "path" : '/home/ubuntu/pm2-apps/ecom-react',
          "pre-deploy-local": '',
          "post-deploy" : 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --name ECOM-NEXT',
          "pre-setup": ''
        }
      }
    };