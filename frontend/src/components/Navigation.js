import React, { useState} from "react";
import { Link } from 'react-router-dom';
const Swal = require('sweetalert2')

function UserGreeting(props) {
  return(
    <div className="App-connexion">
      <div>
        <h2>Bonjour,<br></br>
        {localStorage.getItem("userName")}</h2>

        <Link className="App-connexion-link" to='/'>
          <p>Accueil</p>
        </Link>

        <button className="button-disconnect" onClick={() => Disconnect() }>Déconnexion</button>
      </div>

      <Link className="App-connexion-button" to="/post">
        <p className="App-groupotter">Groupotter</p>
      </Link>

    </div>
  )
}

function Disconnect() {
  Swal.fire({
    title: 'Êtes-vous sûr(e) ?',
    text: "Une fois déconnecté(e), vous ne pourrez plus créer de post.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Me déconnecter'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deconnecté(e)'
      )
      localStorage.clear()
      window.location.reload()
    }
  })
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
  let [userLogged] = useState(isLoggedIn);
  if (userLogged) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Navigation;