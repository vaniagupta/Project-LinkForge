'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faG } from '@fortawesome/free-solid-svg-icons'
import {signIn} from "next-auth/react";
export default function LoginWithGoogle(){
    return(
        <button onClick={ ()=> signIn('google')} 
        className="bg-white shadow text-center w-full py-4 flex gap-2 justify-center">
            <FontAwesomeIcon icon={faG} className="p-1 size-4xl" />
            <span>Sign In with Google</span>
        </button>
    )
}
