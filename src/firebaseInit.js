import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
    apiKey: "AIzaSyCyM81Ju2RbsPm31_Fsb3kYr0OFG3o4wbw",
    authDomain: "alfanni.firebaseapp.com",
    projectId: "alfanni",
    storageBucket: "alfanni.appspot.com",
    messagingSenderId: "661780234238",
    appId: "1:661780234238:web:e7c43ec3286d5102a90aaf"
};

firebase.initializeApp(config);

let messaging = null;

if (firebase.messaging.isSupported()) {
  messaging = firebase.messaging();
} else {
  console.log("no-support");
}

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });

export const test = firebase.messaging.isSupported() ? messaging : null;
