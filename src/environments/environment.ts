// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://newsapi.org/v2',
  apiKey: 'c09297e4fc9f4ab79587263da8079874',
  firebase:{
  	apiKey: "AIzaSyD-_yTWsJFcA9UppFVFjGmNawzDiPiqjxw",
	authDomain: "hope-e982f.firebaseapp.com",
	databaseURL: "https://hope-e982f.firebaseio.com",
	projectId: "hope-e982f",
	storageBucket: "hope-e982f.appspot.com",
	messagingSenderId: "945982550474"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
