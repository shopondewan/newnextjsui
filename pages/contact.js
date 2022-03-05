import React from 'react';
import Navbar from '../components/global-components/navbar-v2';
import PageHeader from '../components/global-components/page-header';
import ContactInfo from '../components/section-components/contact-info';
import ContactForm from '../components/section-components/contact-form';
import Map from '../components/section-components/map';
import CallToActionV1 from '../components/section-components/call-to-action-v1';
import Footer from '../components/global-components/footer';

const ContactV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact Us" subheader="Contact" />
        <ContactInfo />
        <ContactForm />
        <Map />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default ContactV1

