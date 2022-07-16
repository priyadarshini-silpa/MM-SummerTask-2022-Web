import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Datafetching() {
  const[posts, setPosts]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/api/article')
         .then(res=>{
          console.log(res)
          setPosts(res.data)
         })
         .catch(err=>{
          console.log(err)
         })
  },[])
  return (
    <div>
      <ul>
        {posts.map(post =>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Datafetching