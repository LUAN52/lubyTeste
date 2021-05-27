import React from 'react';
import './Header.css';
import {Link,useLocation} from 'react-router-dom';





const Header = () => {

    const location = useLocation();

    return (
        <>
        <header className=" navbar bg-secondary bg-gradient" color="primary" >
            <div className="header">

                <img  className="headerImg"src={process.env.PUBLIC_URL + '/luby.png'} width="95" height="95" alt="header" />
                <div className="innerHeader">
                    <h1  className="text">LUBY  </h1>
                    <p>software do seu jeito</p>
                </div>
            </div>
            
        </header>
        {location.pathname!=="/"?
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                  <Link to="/inicio">
                      <p className="nav-link">Início </p>
                </Link>
              </li>
              <li className="nav-item">
                  <Link to="/repositorio">
                      <p className="nav-link" >Repositorios</p>
                </Link>
              </li>
              <li className="nav-item">
                  <Link to="/seguidores">
                      <p className="nav-link" >Seguidores</p>
                </Link>
              </li>
              <li className="nav-item">
                  <Link to="/seguindo">
                      <p className="nav-link" >Seguindo</p>
                </Link>
              </li>
            </ul>
          </div>
      </nav>:null}
      </>
    )
}


export default Header