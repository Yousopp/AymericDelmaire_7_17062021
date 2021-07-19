import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

function Signup() {
    let history = useHistory();
    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")

    const undleSubmit = e => {
        e.preventDefault() // evite le rechargement
        const data = {name: nom, email: email, password: pass}
        axios.post("http://localhost:3000/api/user/signup", data, {
            method: 'POST',
            body: data,
            headers: { 'Content-Type': 'application/json' },
          })
        .then(res => { 
            history.push('/login')
        })
        .catch( (error) => {
            setError(error.response.data.error)
        })
    }

    return(
        <div className="App-body">
            <form onSubmit={e => undleSubmit(e)} className="App-signup">
                <h1>Inscription</h1>
                <div className="App-loading-form">
                    <div>
                        <label htmlFor="name">Nom : </label>
                        <br></br>
                        <input className="input-form" placeholder="Inscrivez votre pseudo" size="30" type="text" id="name" value={nom} onChange={e => setNom(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email : </label>
                        <br></br>
                        <input className="input-form" placeholder="Inscrivez votre email" size="30" type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Mot de passe : </label>
                        <br></br>
                        <input className="input-form" placeholder="Inscrivez votre Mot de passe" size="30" type="password" id="password" value={pass} onChange={e => setPass(e.target.value)}/>
                    </div>
                </div>
                <div className="error">{error}</div>
                <button className="connexion-button">S'inscrire</button>
            </form>
        </div>
    );
}

export default Signup;