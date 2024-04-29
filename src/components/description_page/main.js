/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../styles/descriptionPage.css';
import PicPia from '../../images/fotoPia.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="DescriptionPage">
            <h2>Carrinho de Compras</h2>
            <p>Itens selecionados para compra:</p>
            <div className='containerFinalizarCompra'>
                <img src={PicPia}></img>
                <div className='text-left'>
                    <p className='textP'>Tipo de mídia:</p>
                    <p className='textP'>Resolução:</p>
                    <p className='textP'>Tipo de licença:</p>
                    <p className='textP'>Como posso utilizar: </p>  
                </div>
                <div className='text-right'>
                    <p className='textP2'>Imagem do Creative</p>
                    <p className='textP2'>Resolução 4000 x 6000 - 300 dpi</p>
                    <p className='textP2'>RGB Royalty-free | Ver resumo das licenças</p>
                    <p className='textP3'>Disponível para todas as utilizações permitidas ao abrigo dos nossos <a href="#">Termos de Licença</a></p>
                    <div className='inputBuy'>
                    <input type='checkbox'/><label className='inputBuy'>Selecionar para compra</label> 
                </div> 
                </div>
            </div>
            <div className='button-div'>
            <p>Subtotal: R$</p>
            <Link to="/finishBuy">
            <button className="custom-button">PROSSEGUIR COM A COMPRA</button>
            </Link>
            </div>
        </div>
    );
}

export default Main;