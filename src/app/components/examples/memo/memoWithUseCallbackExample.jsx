import React, {useEffect, useState} from "react";
import PropTypes from "prop-types"
import { useCallback } from "react";

const LogOutButton = ({onLogOut}) => {
    useEffect(() => {
        console.log('render btn')
    })

    return <button className="btn btn-primary" onClick={onLogOut}>LogOut</button>
}
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
}

const MemoizedLogOutButton = React.memo(LogOutButton)

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false)
    const handleLogOut = useCallback( () => {
        localStorage.removeItem('auth')
    }, [props])

    return <>
    <button className="btn btn-primary" onClick={() => setState(!state)}>initiate render</button>
    <MemoizedLogOutButton onLogOut={handleLogOut}></MemoizedLogOutButton>
    </>;
};

export default MemoWithUseCallbackExample;
