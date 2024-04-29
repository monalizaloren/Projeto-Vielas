import React, { useState } from 'react';
import imagem from '../images/login.png';
import '../styles/navComponent.css';
import '../styles/popUp.css'
import { Link } from 'react-router-dom';

const NavComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="hamburguer">
          <button className="botaoHamburguer">
            <div className="hamburguer-line"></div>
            <div className="hamburguer-line"></div>
            <div className="hamburguer-line"></div>
          </button>
          <Link className='logo' to="/">
            <h1 className="logo">VIELAS</h1>
          </Link>
        </div>

        <div className='loginArea'>
          <a href="#login" className="loginLink" onClick={togglePopup}>Login</a>
          <img src={imagem} alt="" className="nav-image" />
        </div>
          
      </nav>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={togglePopup}>X</button>
            <h2>Bem vindo ;) </h2>
            <form action="#" method='post'>
              <input type="text" name='username' placeholder='Email' required/>
              <input type="password" name="password" placeholder="Senha" required/>
              <div class="keep-signed-in">
                <input type="checkbox" id="keep-signed-in" name="keep-signed-in"/>
                <label for="keep-signed-in">me mantenha conectado</label>
              </div>
              <div class="forgot-password">
                <input type="submit" value="ENTRAR"></input>
                <span>Esqueceu a senha?</span><a href="#"> Clique aqui!</a>
            </div>
            </form>
            
          </div>
        </div>
      )}

    </header>
  );
}

export default NavComponent;
