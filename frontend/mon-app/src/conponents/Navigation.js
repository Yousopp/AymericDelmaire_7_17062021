import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {

    return(
        <div className="App-connexion">
          <div>

            <Link className="App-connexion-link" to='/'>
              <p>Accueil</p>
            </Link>

            <Link className="App-connexion-link" to='/Loading'>
              <p>Se connecter</p>
            </Link>

            <Link className="App-connexion-link" to='/Signup'>
              <p>S'inscrire</p>
            </Link>
          </div>
          <Link className="App-connexion-button" to="/Post">
            <div>
                <p className="App-groupotter">Groupotter</p>
            </div>
          </Link>
        </div>
    )
}

export default Navigation;