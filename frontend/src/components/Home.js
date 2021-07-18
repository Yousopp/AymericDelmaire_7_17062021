import React, { useEffect, useState } from "react";
import axios from 'axios';

function Home() {
    const [listPost, setListPost] = useState([]);
    useEffect ( () => {
        axios.get("http://localhost:3000/api/post/", {
            headers: { 
                'Content-Type': 'application/json',
                accessToken: localStorage.getItem("accessToken")
            },
        })
        .then(res => {
            setListPost(res.data)
        })
    }, []) // Evite la répétition

    return (
        <div className="App-body">
            { listPost.map( (post, key) => {

                return <div key={key} className="App-comment">
                    <div className="title">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="body">
                        {post.content}
                    </div>
                    <img src={post.attachment} alt="" width="250"/>
                    <div>
                        {JSON.stringify(post)}
                    </div>
                </div>

            }) }
       </div>
    )
        
}

export default Home;