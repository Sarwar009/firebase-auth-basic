import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth,
     signInWithPopup,
     FacebookAuthProvider,
     GoogleAuthProvider,
     signOut } from "firebase/auth";
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);
const auth = getAuth();

export const handleFbSignIn = () => {
    const fbProvider = new FacebookAuthProvider();
    

    // const fbSignIn = ()=>
        return signInWithPopup(auth, fbProvider)
        .then((res) => {
            const {displayName, photoURL, email} = res.user;
            const fbUserSignedIn = {
            isSignedIn: true,
            userName: displayName,
            photo: photoURL,
            email: email
        }
            return fbUserSignedIn;
        })
        .catch((error) => {
            console.log(error);

        });
}

//  google auth

    export const handleGoogleSignIn = () =>{
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth, provider)
        .then (res => {
        const {displayName, photoURL, email} = res.user;
        const userSignedIn = {
            isSignedIn: true,
            userName: displayName,
            photo: photoURL,
            email: email
        }
        return userSignedIn;
        }).catch (err => {
        console.log(err.massage);
        })
    }

    //  google sign out

    export const GoogleSignedOut = () => {
        return signOut(auth)
        .then (res => {
          const signedOut = {
          isSignedIn: false,
          userName: '',
          photo: '',
          email: ''
          }
          return signedOut;
        }).catch (err => {
          console.log(err.massage);
        })
      }
