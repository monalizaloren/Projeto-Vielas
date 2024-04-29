import React from "react";
import '../../styles/collectionsStyles/mainCard.css';
import imgExemplo from '../../images/homem_encima_do_muro.jpg'

const MainCard = () => {
    return(
        <main>
            <div className="mainCard">
                <div className="card1-vielas">
                    <h1>VIELAS</h1>
                    <p>Um banco de imagens pensado para mostrar a diversidade das periferias de São Paulo. Nascido nas quebradas e fomentado por quem vive e pensa nelas.</p>
                </div>
                
                <div className="card1-img">
                    <img src={imgExemplo} alt=""/>
                </div>
            </div>
            
        </main>
    )
}

export default MainCard;