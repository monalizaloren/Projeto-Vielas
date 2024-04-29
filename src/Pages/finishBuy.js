import React from 'react';
import imgTijolo from '../images/tijolinho.png'
import '../styles/finishBuy.css'
import { Link } from 'react-router-dom';

const finishBuy = () => {
    return (
        <div className='container'>
            <Link to = "/" >
            <h3 className='backToHome'>VOLTAR</h3>
            </Link>
            <div className='blue'>
                <img src={imgTijolo} alt="" />
            </div>
            <div className='orange'>
                <h1> VALEU ;) </h1>
                <h2> MURAL </h2>
            </div>
        </div>
    );
}

export default finishBuy;