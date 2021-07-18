import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

function Post() {
    let history = useHistory();
    const [title, setTitle] = useState("")
    const [comment, setComment] = useState("")
    const [image, setImage] = useState()

    const undleSubmit = e => {
        e.preventDefault() // evite le rechargement
        const data = {title: title, comment: comment, image: image, userId: localStorage.getItem("userId")}
        axios.post("http://localhost:3000/api/post/", data, {
            method: 'POST',
            body: data,
            headers: { 
                'Content-Type': 'application/json',
                accessToken: localStorage.getItem("accessToken")
            },
          })
        .then(res => {
            history.push('/');
        })
    }

    return(
        <div className="App-body">
            <form onSubmit={e => undleSubmit(e)} className="App-post">
                <h1>Poster un message :</h1>
                <div className="App-loading-form">
                    <div>
                        <label htmlFor="title">Titre : </label>
                        <br></br>
                        <input className="input-form" placeholder="Inscrivez votre titre" size="30" maxLength="30" type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="comment">Commentaire : </label>
                        <br></br>
                        <textarea className="input-form-comment" placeholder="Inscrivez votre texte" width="200" maxLength="250" type="text" id="comment" name="comment" value={comment} onChange={e => setComment(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="image">Image : </label>
                        <br></br>
                        <input className="input-form" type="file" id="image" name="image" value={image} onChange={e => setImage(e.target.files[0].filename)}/>
                    </div>
                </div>
                <button className="connexion-button">Créer le post !</button>
            </form>
        </div>
    );
}

export default Post;