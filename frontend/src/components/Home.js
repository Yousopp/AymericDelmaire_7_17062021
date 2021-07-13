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
            { listPost.map( (value, key) => {

                return <div key={key} className="App-comment">
                    <div className="title">
                        {value.title}
                    </div>
                    <div className="body">
                        {value.content}
                    </div>
                    <img src={value.attachment} alt="imagePost" className="attachment"/>
                </div>

            }) }
       </div>
    )
        
}

export default Home;