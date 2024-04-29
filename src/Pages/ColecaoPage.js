//contato.js
import React from 'react';
import CompSearch from '../components/searchComponent.js';
import CompNav from '../components/navComponent.js';
import CompFooter from '../components/footerSession.js';
import CompGaleria from '../components/gallerySession.js';
import CollectionsPage from '../components/collections/collectionsPage.js';
import '../styles/collectionsPage.css'

function ColecaoPage() {
    return (
        <div>
            <CompNav/>
            <CompSearch/>
            
            <CollectionsPage/>

            <CompGaleria/>
            <CompFooter/>
        </div>
    );
}

export default ColecaoPage;
