import { getFirestore } from "firebase/firestore";
import { initializeApp,getApps } from "firebase/app";


const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL:process.env.databaseURL,
    projectId: process.env.projectID,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId:  process.env.appId,
    measurementId: process.env.measurementId
 };

export const app = getApps().length < 1 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore()
// initializeAppCheck(app, {
//     provider: new ReCaptchaV3Provider('41479E82-45E6-4A63-8D91-48E780F02733'),
//     isTokenAutoRefreshEnabled: true
// });



