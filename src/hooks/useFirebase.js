import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import authInitialize from '../firebase/firebase.init';

authInitialize();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleSignIn = (from, navigate) => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {

                setUser(result.user);
                saveAndFindUsers(result.user.email, result.user.displayName, 'PUT');
            })
            .catch(error => setError(error.message))
            .finally(() => {
                navigate(from, { replace: true })
                setLoading(false)
            })
    }

    const logOut = () => {

        signOut(auth)
            .then({})
    }

    const saveAndFindUsers = (email, name = '', method) => {

        const user = { name: name, email: email }
        console.log('saveAndFindUsers')

        fetch(`http://localhost:5000/users`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { })
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user)
                setLoading(false)
            }
            else {
                setUser(null)
                setLoading(false)
            }
        })
    }, [])

    return {
        user,
        error,
        googleSignIn,
        logOut,
        loading
    };
};

export default useFirebase;