import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";


const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectID,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
 };
 
export const app = initializeApp(firebaseConfig)
export const fireStore = getFirestore(app);

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LfIrSAgAAAAAHYbDL6RUXcYhX_4GSMrqTkili_j'),
    isTokenAutoRefreshEnabled: true
  });