# Undiscover source
This is the single repo for both strapi cms and gatsby frontend for undiscover blog. 

## Up and running
You need gatsby installed globally with `npm install -g gatsby-cli`, then run `yarn install` in both cms and blog folders to install dependencies.

## Development
First start strapi cms with `npm run strapi develop` and visit http://localhost:1337/admin/
Then start gatsby with `gatsby develop` and visit http://localhost:8000

## Build
Ensure the cms server us running, run `gatsby build`. Now commit the repo on ./blog/public and push it to deploy the new server (netlify), then commit on the root (./) and push on the 'sorce' branch to have source code (and database) aligned

### Note
Strapi is using SQLite and db files are committed in this repo, cms and gatsby dependencies are not
