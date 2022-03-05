import React from 'react';
import Navbar from '../components/global-components/navbar-v2';
import PageHeader from '../components/global-components/page-header';
import ShogGrid from '../components/shop-components/shop-grid-v1';
import CallToActionV1 from '../components/section-components/call-to-action-v1';
import Footer from '../components/global-components/footer';

const ShopGrid_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Shop Grid" />
        <ShogGrid />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default ShopGrid_V1

