'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {signOut} from "next-auth/react";
export default function LogoutButton(){
    return(
        <button className="flex items-center border p-2 px-4 shadow gap-2" onClick={ () => signOut()}>
            <span>Logout</span>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
    )
}