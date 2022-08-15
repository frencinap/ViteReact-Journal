import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

// creamos la instancia para usar goggle sign in
const googleProvider = new GoogleAuthProvider();

export const signInwithGoogle = async() => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult( result )
        //console.log({credentials})
        const { displayName, email, photoURL, uid} = result.user

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
        
    } catch (error) {

        //console.log(error)
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const registerUserWithEmailAndPassword = async({ email, password, displayName }) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = result.user
        console.log(result);
        //todo: actualizar displayName en firebase
        return {
            ok:true,
            uid,
            photoURL,
            email,
            displayName
        }
    } catch (error) {
        console.log(error);
        return { 
            ok:false, 
            errorMessage: error.message 
        }
    }
}