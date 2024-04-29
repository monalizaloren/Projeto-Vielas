/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Exemplo de importação de ícones
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='rodape1'>
                <div>
                    <h3 className='title' >VIELAS</h3>
                </div>
                <div className="icons">    
                    <a className='iconType' href="#"><FaFacebook /></a>
                    <a className='iconType' href="#"><FaInstagram /></a>  
                    <a className='iconType' href="#"><FaTwitter /></a>
                    <a className='iconType' href="#"><FaWhatsapp /></a>
                    <a className='iconType' href="#"><FaLinkedin /></a>
                </div>
            </div>
            <div className='rodape2'>
                <div className='icons2'>
                    <a className='texto' href="#">Quem Somos</a>
                    <a className='texto' href="#">Equipe</a>
                    <a className='texto' href="#">Apoie</a>
                    <a className='texto' href="#">Fale Conosco</a>               
                </div>     
            </div>           
        </footer>
    );
}

export default Footer;