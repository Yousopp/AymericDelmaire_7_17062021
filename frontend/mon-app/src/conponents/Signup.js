import React from "react";

function Signup() {

    return(
        <div className="App-body">
            <div className="App-signup">
                <h1>Inscription</h1>
                <div>
                    <label for="name">Nom : </label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label for="email">Email : </label>
                    <input type="text" id="email"/>
                </div>
                <div>
                    <label for="password">Mot de passe : </label>
                    <input type="text" id="password"/>
                </div>
                <div>
                    <label for="avatar">Avatar : </label>
                    <input type="text" id="avatar"/>
                </div>
                <button>S'inscrire</button>
            </div>
        </div>
    );
}

export default Signup;