import React from "react";

function Post() {

    return(
        <div className="App-body">
            <div className="App-post">
                <h1>Poster un message :</h1>
                <div>
                    <label htmlFor="title">Titre : </label>
                    <input type="text" id="title"/>
                </div>
                <div>
                    <label htmlFor="comment">Commentaire : </label>
                    <input type="text" id="comment"/>
                </div>
                <div>
                    <label htmlFor="image">Image : </label>
                    <input type="text" id="image"/>
                </div>
                <button>Créer le post !</button>
            </div>
        </div>
    );
}

export default Post;