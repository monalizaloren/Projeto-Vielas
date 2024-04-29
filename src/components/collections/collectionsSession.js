import React from 'react'
import '../../styles/collectionsStyles/collectionsSession.css'
import { Link } from 'react-router-dom';
import ImageEleicoes from '../../images/FotoCesta.jpg'
import ImageArte from '../../images/FotoGrafitti.jpg'
import ImageCrise from '../../images/fotoPia.jpg'
import ImagemGaleria1 from '../../images/FotoMenina.jpg'
import ImagemGaleria2 from '../../images/FotoColecao.jpg'
import ImagemGaleria3 from '../../images/FotoAlbina.jpg'
import ImagemGaleria4 from '../../images/FotoComunidade.jpg'
import ImagemGaleria5 from '../../images/FotoTrem.jpg'
import ImagemGaleria6 from '../../images/FotoPaisagem.jpg'

const ColectionSession = () => {
  return (
    <div>

    <div className='containerCollections'>
      <div>
        <Link to="/colecaoPage" className='title'>
          <h1 className='title'>COLEÇÕES</h1>
        </Link>
      </div>
      <div className='collection'>
        <div className='collectionItem'>
          <Link to="/compras">
            <img src={ImageEleicoes} alt="" className='collectionImage'/>
          </Link>
          <div>
            <h5 className='collectionTitle'>Eleições 2022</h5>
            <p className='collectionDescription'>Como estão as eleições nas periferias e Grande São Paulo</p>
          </div>
        </div>
        <div className='collectionItem'>
          <img src={ImageArte} alt="" className='collectionImage' />
          <div>
            <h5 className='collectionTitle'>Arte de Rua</h5>
            <p className='collectionDescription'>Grafites que enfeitam as ruas das quebradas</p>
          </div>
        </div>
        <div className='collectionItem'>
          <img src={ImageCrise} alt="" className='collectionImage' />
          <div>
            <h5 className='collectionTitle'>Crise Financeira</h5>
            <p className='collectionDescription'>Como a alta dos preços impactam as famílias das periferias</p>
          </div>
        </div>

      </div>
    </div>

      <hr></hr>


      <div className='galleryViella'>
          <img src={ImagemGaleria1} alt="" className='galleryViella-items'/>
          <img src={ImagemGaleria4} alt="" className='galleryViella-items'/>
          <img src={ImagemGaleria2} alt="" className='galleryViella-items'/>
          <img src={ImagemGaleria5} alt="" className='galleryViella-items'/>
          <img src={ImagemGaleria3} alt="" className='galleryViella-items'/>
          <img src={ImagemGaleria6} alt="" className='galleryViella-items'/>
          <img src={ImagemGaleria3} alt="" className='galleryViella-items'/>
          <img src={ImagemGaleria6} alt="" className='galleryViella-items'/>
          <img src={ImagemGaleria6} alt="" className='galleryViella-items'/>
        </div>
    
    </div>
  )
}

export default ColectionSession;
