import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {

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

export default Navigation;