import React from "react";
import CompNav from '../components/navComponent';
import CompMain from '../components/description_page/main';
import CompFooter from '../components/footerSession';


 function DescriptionPage() {
    return (
        <div>
            <CompNav/>

            <CompMain/>

            <CompFooter/>
        </div>
    );
}

export default DescriptionPage;