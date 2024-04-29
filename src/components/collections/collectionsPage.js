import React from 'react';
import ImageCrise from '../../images/fotoPia.jpg'

const CollectionsPage = () => {
    return(
        <div className="conteinerColecoes">
            <h1>Resultado em Coleções</h1>
            <div className='conteinerDescricao'>
                <img src={ImageCrise} alt=""  className="imagem-crise"/>
                <div className="informacoes-crise">
                    <h2>Crise Financeira</h2>
                    <p>Como a alta dos preços impactam as famílias das periferias</p>
                </div>
            </div>
            <h1>Outros resultados</h1>
        </div>
    )
}


export default CollectionsPage;