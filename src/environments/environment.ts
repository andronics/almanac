// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA0RW9rWDE4WjbRcSWpANQjLUWB3zkXUQE",
    authDomain: "andronics-almanac.firebaseapp.com",
    databaseURL: "https://andronics-almanac.firebaseio.com",
    projectId: "andronics-almanac",
    storageBucket: "andronics-almanac.appspot.com",
    messagingSenderId: "819970824650"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
