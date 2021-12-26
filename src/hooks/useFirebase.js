import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, getIdToken } from 'firebase/auth'
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

    const userCreation = (email, password, name, navigate) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                saveAndFindUsers(email, name, 'POST')
            })
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
            })
            .catch(error => setError(error.message))
            .finally(() => {
                navigate('/home');
                setLoading(false)
            })
    }

    const manualSignIn = (email, password, from, navigate) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

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

        fetch(`https://limitless-bastion-02273.herokuapp.com/users`, {
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
                getIdToken(user)
                    .then(token => localStorage.setItem('userToken', token))
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
        userCreation,
        manualSignIn,
        loading,
    };
};

export default useFirebase;