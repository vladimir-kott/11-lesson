import React from "react";
import { useState } from "react";


const SimpleComponent = () => {

    const isAuth = localStorage.getItem('user')

    const [chackAuth, setChackAuth] = useState(isAuth)

    const onLogin = () => {
        setChackAuth(localStorage.setItem('user', 'isAuth'))
    }
    const onLogOut = () => {
        localStorage.clear();
        setChackAuth(null)
    }

    console.log('chackAuth', chackAuth)

    return ( 
        <>
        {
            isAuth?
            <button 
                className="btn btn-primary"
                onClick={onLogOut}
            >
                LogOut
            </button>
            :
            <button 
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
            </button>
        /*isAuth?<Component {...props}/>:<SmallTitle>Auth</SmallTitle>*/
        }
        </> );
}
 
export default SimpleComponent;