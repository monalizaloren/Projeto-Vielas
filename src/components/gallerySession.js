import React from 'react'
import '../styles/gallerySession.css';
import ImagemGaleria1 from '../images/FotoMenina.jpg'
import ImagemGaleria2 from '../images/FotoColecao.jpg'
import ImagemGaleria3 from '../images/FotoAlbina.jpg'
import ImagemGaleria4 from '../images/FotoComunidade.jpg'
import ImagemGaleria5 from '../images/FotoTrem.jpg'
import ImagemGaleria6 from '../images/FotoPaisagem.jpg'

const GallerySession = () => {
    return (
      <div className='gallery'>
          <img src={ImagemGaleria1} alt="" className='galery-items'/>
          <img src={ImagemGaleria4} alt="" className='galery-items'/>
          <img src={ImagemGaleria2} alt="" className='galery-items'/>
          <img src={ImagemGaleria5} alt="" className='galery-items'/>
          <img src={ImagemGaleria3} alt="" className='galery-items'/>
          <img src={ImagemGaleria6} alt="" className='galery-items'/>
          <img src={ImagemGaleria3} alt="" className='galery-items'/>
          <img src={ImagemGaleria6} alt="" className='galery-items'/>
          <img src={ImagemGaleria6} alt="" className='galery-items'/>
      </div>
    )
}

export default GallerySession;