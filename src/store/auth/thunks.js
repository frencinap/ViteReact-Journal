import { signInwithGoogle, registerUserWithEmailAndPassword } from "../../firebase/providers"
import { checkingCredentials, logout, login } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() )
        const result = await signInwithGoogle();
        console.log({result})
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) )

        dispatch ( login( result ) )
    }
}

export const createUserWithEmailAndPassword = ({email, password, displayName}) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )
        const resp = await registerUserWithEmailAndPassword({ email, password, displayName})
        console.log(resp);
    }
}