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
          "ref"  : 'origin/feature/duq_comp',
          "repo" : 'git@github.com:ravitejaviyyuri/ecom_react.git',
          "path" : '/home/ubuntu/ecom_react',
          "pre-deploy-local": '',
          "post-deploy" : 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --name ECOM-NEXT',
          "pre-setup": '',
	env: {
	NODE_ENV: 'development',
	PORT: 1234
		}
        }
      }
    };
