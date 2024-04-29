import React from 'react';
import CompNav from '../components/navComponent';
import CompSearch from '../components/searchComponent';
import CompFooter from '../components/footerSession';
import MainBuyPage from '../components/collections/mainBuyPage.js';
import GallerySession from '../components/gallerySession.js'

function BuyPage() {
    return(
        <div>
            <CompNav/>
            <CompSearch/>

            <MainBuyPage/>
            <GallerySession/>
            <CompFooter/>
        </div>
    )
}

export default BuyPage;