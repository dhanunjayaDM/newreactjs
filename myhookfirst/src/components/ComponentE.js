import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext, ChannalContext} from '../App'

function ComponentE() {
    const user=useContext(UserContext);
    const channal=useContext(ChannalContext);

    return (
        <div>
            {/* <ComponentF/> */}
            user context value is {user} and channal context value is {channal}
        </div>
    )
}

export default ComponentE
