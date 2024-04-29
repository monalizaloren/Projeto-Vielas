import React from 'react';
import '../styles/descriptionPage.css'

const Main = () => {
    return (
        <div className="DescriptionPage">
            <div className="TextCenter">
                <h2>Carrinho de Compras</h2>
                <p>Itens selecionados para compra:</p>
            </div>
            <div className="Container">
                <ul>
                    <li>Tipo de mídia:</li>
                    <li>Resolução:</li>
                    <li>Tipo de Licença:</li>
                    <li>Como posso utilizar:Disponível para todas as utilizações permitidas ao abrigo dos nossos<a href="https://www.google.com">Termos de licença</a></li>  
                </ul>
            </div>
        </div>
    );
}

export default Main;