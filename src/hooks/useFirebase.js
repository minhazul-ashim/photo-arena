import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import authInitialize from '../firebase/firebase.init';

authInitialize();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const googleSignIn = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
    }

    const logOut = () => {

        signOut(auth)
            .then(console.log('signed out'))
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if(user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
        })
    }, [])

    return {
        user,
        error,
        googleSignIn,
        logOut
    };
};

export default useFirebase;