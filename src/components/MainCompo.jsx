import React from 'react';
import Navbar from './Navbar'
import Cardtick1 from './Cardtick';
// import data from '../data.json';
import ProvenCompo from './ProvenCompo';
import Gallery from './Gallery-img';
import Card2 from './Card2';
import Coutdown from './Coutdown';
// import Slider from './Slider';
import Innovative from './Innovative';
import Faq from './Faq';

export default function MainCompo() {
    return (
        <>
            <Navbar />

            <Cardtick1 />

            <ProvenCompo />

            <Gallery />

            <Card2 />

            <Coutdown />

            {/* <Slider /> */}

            <Innovative />

            <Faq />
        </>
    )
}
