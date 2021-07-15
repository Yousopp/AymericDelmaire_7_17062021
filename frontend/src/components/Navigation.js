import React, { useState} from "react";
import { Link } from 'react-router-dom';

function UserGreeting(props) {
  return(
    <div className="App-connexion">
      <div>
        
        <Link className="pseudo" to="/">
          <h2>Bonjour,<br></br>
          {localStorage.getItem("userName")}</h2>
        </Link>

        <Link className="App-connexion-link" to='/'>
          <p>Accueil</p>
        </Link>

        <button onClick="Cliqué !">Déconnexion</button>
      </div>

      <Link className="App-connexion-button" to="/post">
        <p className="App-groupotter">Groupotter</p>
      </Link>

    </div>
  )
}

function GuestGreeting(props) {

  return(
    <div className="App-connexion">
      <div>

        <Link className="App-connexion-link" to='/'>
          <p>Accueil</p>
        </Link>

        <Link className="App-connexion-link" to='/login'>
          <p>Se connecter</p>
        </Link>

        <Link className="App-connexion-link" to='/signup'>
          <p>S'inscrire</p>
        </Link>
      </div>
      <Link className="App-connexion-button" to="/post">
        <div>
            <p className="App-groupotter">Groupotter</p>
        </div>
      </Link>
    </div>
  )
}

function Navigation(props) {
  const isLoggedIn = localStorage.getItem('accessToken');
  let [userLogged, setUserLogged] = useState(isLoggedIn);
  if (userLogged) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Navigation;