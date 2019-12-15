import React ,{useState,useEffect}from 'react'

function HookeEffectRunOcce() {

    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMousePosition=e=>{
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(
        ()=>{
            console.log("useEffect is called")
            window.addEventListener("mousemove", logMousePosition)
 return ()=>{
     window.removeEventListener('mousemove',logMousePosition)
 }
        },[]
    )
    return (
        <div>
            Look X-{x}, Y-{y}
        </div>
    )
}

export default HookeEffectRunOcce
