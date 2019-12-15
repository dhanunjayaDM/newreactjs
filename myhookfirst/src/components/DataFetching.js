import React,{useState, useEffect}from 'react';
import axios from 'axios';
function DataFetching() {
    const [posts,setPosts]=useState([])
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)

    


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>{
            console.log(response);
            setPost(response.data)
        }).catch((err)=>{
            console.log(err)
        })
        // axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        //     console.log(response);
        //     setPosts(response.data)
        // }).catch((err)=>{
        //     console.log(err)
        // })
    },[id])
    return (
        <div>
<input type="text" value={id} onChange={e=>setId(e.target.value)}/>
    <div>{post.title}</div>


            {/* {posts.map(
                post=>(
                <li key={post.id}>{post.title}</li>
                )
            )} */}
        </div>
    )
}

export default DataFetching
