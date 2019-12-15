import React,{useState,useEffect} from 'react'

function HookCounteronce() {
    const [count,setCount]=useState(0)
    const [name, setName] = useState("")
    useEffect(() => {
        console.log("useeffect")
        document.title=`you clicked ${count} times`
    },[])
    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
              <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
        </div>
    )
}

export default HookCounteronce
