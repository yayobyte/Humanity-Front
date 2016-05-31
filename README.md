# Humanity-Front
### Before installation 
> Stuff needed before having this run

1. Install backend repo, you can continue but the app will not have data to query [Back End Repo](https://github.com/yayobyte/Humanity-Back)
2. Install : [NODE JS](https://nodejs.org/en/) with NPM package manager
3. Install gulp `sudo npm install -g gulp`
4. Install git

###Installation
1. Install a HTTP server (Apache, NGINX, etc) 
2. On a console do a `git clone` of this repo on your local
3. On the console do a `npm install`
4. Look for the config file located at `/src/app/config/env.js`
5. Change the  `globalConfig.apiEndpoint` variable to your backend server repo. be careful using ports
6. On the console do a `gulp` (Gulp has listeners to change /dist files each time you edit the /src files)

Enjoy it!
