# ws-challenge

## Introduction

Project done using *[VueJS](https://vuejs.org/)* and *[VueX](https://vuex.vuejs.org/)* is used for state management. 

*[Vue-apollo](https://apollo.vuejs.org/)* as a GraphQl client. 

*[Vue-test-utils](https://vue-test-utils.vuejs.org/)* for unit testing. (Jest based).

Any questions, please feel free to reach me.

## Considerations/improvements

Improvements could be made in several areas of the app, depending on the time and how it would scale.

### Project main files

**main.js** is where the app init occurs and also also includes some configuration aspects. When scaling, configs can go to separate files if needed.

**App.vue** is the app entry point in terms of views. all routes are "appended" to it. Also loads global styles.

### CSS/SASS

Typography could be defined in a central file for specific HTML elements as H1's, H2's, etc, if the design was consistent, which would help in terms of scalability.

No breakpoints for mobile, although it was coded within a central collumn with a fluid approach.

Central files for CSS reset (Erki Meyer's), fonts and global variables.

### State Management

I have included an example of store usage for a possible global loading state. This is pretty simple, just for demo purposes, but in terms of scalability, we can separate the store by modules (according to specific business units) and those should have the **state**, **getters**, **actions** and **mutations** separated per file for better management.

### GraphQl data loading and management

Used **[Vue-apollo](https://apollo.vuejs.org/)** as a GraphQl client. Since I never worked with graphQl, there are probably several optimisations left to be done here, so take it with a grain of salt. Since the example is pretty straightforward I decided not to add the information loaded to the state management system. In a more complex app this may be required. Check more information on the [Views](#Views) section.

### Views

Created two base views (*MissionListView* and *SingleMissionView*), one for each route. They both handle the GraphQl data loading.
Took into account the data loading state (async load), but left console log's in apollo's hooks like **result** (where we could send data to the store) or **error**  (where we could consider an error state for the app). Check code comments.

### Components

Created several components to showcase possible drilldown of logical elements. When scaling this can be refined if needed.
Handled delay of image loading, as well as if there is no description or background image for a mission. The SpaceX default bg image is not optimized in terms of size (this should be taken into account on a production level project)

### Testing

Added some unit testing for the components of the app, for demo purposes. Also configured the repo to deliver a coverage report. All areas of the app, such as views, store and other JS modules created should be tested on a production level project.

Project was initialized with E2E testing with Cypress but no tests where written for the effect.


## Project setup
The project runs on **node** `v12.4.0` and **npm** `v6.9.0`. For installation run:
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```
