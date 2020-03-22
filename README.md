## About
My personal webpage with (later developed) blog posts). Though theoretically noone _needs_ to run this repository (being my profile and all...), I'm documenting the setup process, dependencies, etc. so people may perhaps use it as a template or some such in the future.

This is built in Vue.js, with design inspired by and built using tools found from [Creative Tim's Vue Material Kit](https://www.creative-tim.com/product/vue-material-kit) and [Materialize CSS](https://materializecss.com/).

## Prerequisites
The project was built using Node v13.9.0/NPM v6.13.7. After ensuring the presence of Node.js and NPM on your system, proceed to Getting Started.

## Getting Started
- Clone the repository:
```git clone https://github.com/Tzeusy/site```
- Install all relevant packages:
```npm i```

## Running
Specifications regarding npm behavior are specifed in `package.json`. Instructions for different use cases as follows:
- Development: ```npm run dev```
- Production: ```npm run build```
- Production/Deployment: ```./deploy.sh```
  - `deploy.sh` goes through the process of building and pushing all changes on the local repository to a separate sub-repository containing only the compiled files (i.e. the `dist/` folder post-`npm build`), shown in `tzeusy.github.io`. Hence, make sure your local repository is the production-ready version before running `deploy.sh`.

## Authors
Me (Tze How).

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
