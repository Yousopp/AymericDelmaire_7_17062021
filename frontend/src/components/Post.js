import React from "react";

function Post() {

    return(
        <div className="App-body">
            <div className="App-post">
                <h1>Poster un message :</h1>
                <div>
                    <label for="comment">Commentaire : </label>
                    <input type="text" id="comment"/>
                </div>
                <div>
                    <label for="photo">Photo : </label>
                    <input type="text" id="photo"/>
                </div>
                <button>Créer le post !</button>
            </div>
        </div>
    );
}

export default Post;