import React from 'react';
import Navbar from '../components/global-components/navbar-v2';
import PageHeader from '../components/global-components/page-header';
import ProductSlider from '../components/shop-components/product-slider-v1';
import ProductDetails from '../components/shop-components/shop-details';
import CallToActionV1 from '../components/section-components/call-to-action-v1';
import Footer from '../components/global-components/footer';

const Product_Details = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Product Details" customclass="mb-0" />
        <ProductSlider />
        <ProductDetails />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Product_Details

