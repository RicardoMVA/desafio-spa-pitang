## Deployment steps used (Ubuntu)

## Installing node.js:
Install nvm using:
`curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`
Then run:
`source ~/.profile`

Install latest Node.js runtime using nvm:
`nvm install node`


## Installing and building frontend and backend:
Run `npm install` in both /frontend and /backend folders of this repo

Run `npm run build` in /frontend folder to generate /build folder with index.html


## Installing and using process manager PM2:
Install pm2 using `npm install -g pm2`

Run `pm2 start app.js` inside /backend folder to start backend process

Run `pm2 list` to make sure process is running correctly

Run `pm2 startup` to create initialization script

Run `pm2 save` to save current process to initialization script


## Installing and running NGINX:
Install nginx using `apt install nginx`

Delete `default` file from `/etc/nginx/sites-enabled`

Copy `desafio` file from this repo into `/etc/nginx/sites-enabled`, make sure it points to the correct folder where the index.html was created from the build process of the frontend

Check if nginx is running using `systemctl status nginx`

If not running, use `systemctl start nginx`

If running, use `systemctl restart nginx` to load new configuration

Visit root '/' URL of your server ip and it should serve the frontend app.