# SpaceXData

Angular Web application that help users list and browse all launches by SpaceX program.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.

## Development server

Run `npm run ssr:serve` for a dev server. Navigate to `http://localhost:4000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Heroku app
Check this app using this URL: https://space-x-data-demo.herokuapp.com/

Any code changes done and pushed to master branch in git will automatically trigger deployement build in heroku which in turn will execute below two scripts from package json:

1.  npm build --> builds the angular universal app in production mode and create browser and server folder in dist/
2.  npm start --> starts "node server.js” this command will run the server.js file from the dist/server folder through the heroku server.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Current test cases code coverage report attached below:

![image](https://user-images.githubusercontent.com/56883443/98465927-56620a00-21f2-11eb-8b6b-b0211a77df5c.png)


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Mobile view
![image](https://user-images.githubusercontent.com/56883443/98466204-05ebac00-21f4-11eb-8f15-1ea474850a01.png)
![image](https://user-images.githubusercontent.com/56883443/98518698-bbbb0700-2295-11eb-8e1f-10335d1c55cb.png)



## Desktop View
![image](https://user-images.githubusercontent.com/56883443/98518483-739be480-2295-11eb-8ce8-54e24f419a8f.png)


## I-pad View
![image](https://user-images.githubusercontent.com/56883443/98518784-db522f80-2295-11eb-8248-3af28e43296b.png)




