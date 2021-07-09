import React, { useState } from "react";
import axios from "axios";

function Loading() {
    const [nom, setNom] = useState("")
    const [pass, setPass] = useState("")

    const undleSubmit = e => {
        e.preventDefault() // evite le rechargement
        const data = {name: nom, password: pass}
        console.log(data)
        console.log(e)
        axios.post("http://localhost:3000/api/user/login", data)
        .then(res => console.log(res))
    }

    return(
        <div className="App-body">
            <form onSubmit={e => undleSubmit(e)} className="App-loading">
                <h1>Connection</h1>
                <div>
                    <label htmlFor="name">Nom : </label>
                    <input type="text" id="name" name="name" value={nom} onChange={e => setNom(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe : </label>
                    <input type="text" id="password" name="password" value={pass} onChange={e => setPass(e.target.value)}/>
                </div>
                <button>Se connecter</button>
            </form>
        </div>
    );
}

export default Loading;