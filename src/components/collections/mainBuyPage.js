import React from "react";
import '../../styles/collectionsStyles/mainBuyPage.css'
import cachorro from '../../images/FotoCesta.jpg'
import { Link } from 'react-router-dom';


const MainBuyPage = () => {
    return(
        <main className="mainBuyPage">
            <div className="CardItem">
                <div className="fotoItem">
                    <img src={cachorro} alt="" />
                </div>
                
                <div className="descricao">
                    <div className="filhoDescricao">
                        <h2>Casarão do Cambuci</h2>
                        <p className="descricaoProduto">Vista da casa de Dona Magnólia no Cambuci</p>
                        <p className="descricaoFoto">Foto de <a href="#" className="linkProduto">Ira Romão</a></p>
                        
                        
                        <form action="" className="formulario">
                            <div className="formulario1">   
                                <input type="radio" className="radio" name="plano"/>
                                <label for="compraIndividual" >Adicionar ao carrinho (compra individual)</label>
                            </div>

                            <div className="formulario2">   
                                <input type="radio" className="radio" name="plano"/>
                                <label for="pacote">Adicionar a meu pacote (planos)</label>
                            </div>
                        </form>
                            <Link to="/DescriptionPage">
                                <button className="botaoComprar">COMPRAR</button>
                            </Link>
                    </div>    
                </div>
            </div>
                    <div className="card2">
                        <div className="card2Img">
                            <img src={cachorro} alt="" className="imgCard2"/>
                            <div className="descricacaoCard2">
                                <div>
                                    <h1 className="teste">Crise Finaneceira</h1>
                                    <p>Como a alta dos preços impacta as familias das periferias</p>
                                </div>
                                
                            </div>
                        </div>

                        <div className="card2Titulo">
                            <div className="teste1">
                                <h2>Fotos semelhantes:</h2>
                            </div>
                        </div>
                    </div>
        </main>
    )
}

export default MainBuyPage;