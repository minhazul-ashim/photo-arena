import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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

    return {
        user,
        error,
        googleSignIn
    };
};

export default useFirebase;