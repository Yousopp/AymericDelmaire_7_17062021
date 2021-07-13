import React, { useEffect, useState } from "react";
import axios from 'axios';

function Home() {
    console.log(localStorage.getItem("userId"))
    const [listPost, setListPost] = useState([]);
    useEffect ( () => {
        axios.get("http://localhost:3000/api/post/", {
            method: 'GET',
            body: {userId: localStorage.getItem("userId")},
            headers: { 
                'Content-Type': 'application/json',
                accessToken: localStorage.getItem("accessToken")
            },
          })
        .then(res => {
            setListPost(res.data)
        })
    })

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
                    <div className="attachment">
                        {value.attachment}
                    </div>
                </div>

            }) }
       </div>
    )
        
}

export default Home;