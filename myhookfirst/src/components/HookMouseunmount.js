import React,{useState} from 'react'
import HookeEffectRunOcce from './HookeEffectRunOcce'

function HookMouseunmount() {

    const [display,setDisplay]=useState(false)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle display</button>
       {display && <HookeEffectRunOcce></HookeEffectRunOcce>}
        </div>
    )
}

export default HookMouseunmount
