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
          "host" : 'localhost',
          "ref"  : 'feature/duq_comp',
          "repo" : 'git@bitbucket.org:edureka/ecom_react.git',
          "path" : '/home/ubuntu/pm2-apps/ecom-react',
          "pre-deploy-local": '',
          "post-deploy" : 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --name ECOM-NEXT',
          "pre-setup": ''
        }
      }
    };
