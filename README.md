# mail-app
An Email client + API using MEAN stack (Angular 2).

### Before running anything
`npm install`

### To run API server
1. goto root directory 'mail-app/'
2. enter command `npm start`

### To run angular client
1. goto angular-src folder
2. enter command `ng serve` (need angular-cli)

### Changes needed when switching between heroku and localhost
- edit auth.service.ts, change 'registerUser', 'authenticateUser' and 'getProfile' functions http code (uncomment commented and comment uncomment ;-) ).
- change database.js database code to run on local mongo server (again uncomment commented and comment uncomment).

### Bootstrap SASS
This app uses bootstrap sass with bootwatch cosmo theme. The main files are in sass folder and all custom css is written in _custom.scss file. Style.scss file holds the imports from bootstrap, bootwatch, sass folder, etc. The fonts folder holds files for font-awesome.

### Credits
This app is mainly based on [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA) MEAN Stack Front to Back tutorial.
