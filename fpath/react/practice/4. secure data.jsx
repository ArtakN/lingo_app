/* to secure data in React, for example firebase api keys, 

   1. We create .env.local file in the root directory of the project. 

      .env.local  

   2. than in this file we create varibles and assign them with firebase api 
      keys

      REACT_APP_FIREBASE_API_KEY=AIzaSy5bWU1bS2mXTk7ctgpOQtN0mYs
      REACT_APP_FIREBASE_AUTH_DOMAIN=wortschaaseapp.com
      REACT_APP_FIREBASE_PROJECT_ID=wortschatz-51329
      REACT_APP_FIREBASE_STORAGE_BUCKET=wortschat.com
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID=9563559
      REACT_APP_FIREBASE_APP_ID=1:9563519:web:d1f8313cd622
      REACT_APP_FIREBASE_MEASUREMENT_ID=1:9563959:web:d1f13cd22

      if we use Vite

      VITE_REACT_APP_FIREBASE_API_KEY=AIzaSy5bWU1bS2mXTk7ctgpOQtN0mYs
      VITE_REACT_APP_FIREBASE_AUTH_DOMAIN=wortschaaseapp.com
      VITE_REACT_APP_FIREBASE_PROJECT_ID=wortschatz-51329
      VITE_REACT_APP_FIREBASE_STORAGE_BUCKET=wortschat.com
      VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID=9563559
      VITE_REACT_APP_FIREBASE_APP_ID=1:9563519:web:d1f8313cd622
      VITE_REACT_APP_FIREBASE_MEASUREMENT_ID=1:9563959:web:d1f13cd22

   3. In our codebase (for example in src/firebase.js), we can access these 
      environment variables using 

      import { initializeApp } from "firebase/app";
      import { getAnalytics } from "firebase/analytics";

      const firebaseConfig = {
         apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
         authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
         projectId: REACT_APP_FIREBASE_PROJECT_ID,
         storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
         messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
         appId: REACT_APP_FIREBASE_APP_ID,
         measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
      };

      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);  
      
      if we ude Vite 

        import { initializeApp } from "firebase/app";
      import { getAnalytics } from "firebase/analytics";

      const firebaseConfig = {
         apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
         authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
         projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
         storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
         messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
         appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
         measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID
      };

      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);  
      
   4. at last we need to import this to our base file - main.js

      import './firebase.js'

      ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <BrowserRouter>
            <Provider store={store}>
              <App />
            </Provider>
          </BrowserRouter>
        </React.StrictMode>,
      )
*/