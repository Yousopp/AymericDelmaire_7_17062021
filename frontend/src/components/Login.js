import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

function Login() {
    let history = useHistory();
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const undleSubmit = e => {
        e.preventDefault() // evite le rechargement
        const data = {email: email, password: pass}
        axios.post("http://localhost:3000/api/user/login", data, {
            method: 'POST',
            body: data,
            headers: { 'Content-Type': 'application/json' },
          })
        .then(res => {
            localStorage.setItem("accessToken", res.data.token)
            localStorage.setItem("userId", res.data.userId)
            localStorage.setItem("userName", res.data.name)
            history.push('/')
        })
    }

    return(
        <div className="App-body">
            <form onSubmit={e => undleSubmit(e)} className="App-loading">
                <h1>Connection</h1>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe : </label>
                    <input type="password" id="password" name="password" value={pass} onChange={e => setPass(e.target.value)}/>
                </div>
                <button>Se connecter</button>
            </form>
        </div>
    );
}

export default Login;