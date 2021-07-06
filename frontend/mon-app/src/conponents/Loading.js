import React from "react";

function Loading() {

    return(
        <div className="App-body">
            <div className="App-loading">
                <h1>Connection</h1>
                <div>
                    <label for="name">Nom : </label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label for="password">Mot de passe : </label>
                    <input type="text" id="password"/>
                </div>
                <button>Se connecter</button>
            </div>
        </div>
    );
}

export default Loading;