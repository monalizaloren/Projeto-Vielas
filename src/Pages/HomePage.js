import React from 'react';
import CompSearch from '../components/searchComponent.js';
import CompNav from '../components/navComponent.js';
import ComponentsMain from '../components/collections/mainCard.js';
import CompFooter from '../components/footerSession.js';
import CompSession from '../components/collections/collectionsSession.js';
import GallerySession from '../components/gallerySession.js'


function HomePage() {
  return (

      <div>
        <CompNav/>
        <div>
          <CompSearch/>
        </div>
        <div>
          <ComponentsMain/>
        </div>
        <div>
          <CompSession/>
        </div>

        <div>
          <CompFooter/>
        </div>
      </div> 
    
  );
}

export default HomePage;