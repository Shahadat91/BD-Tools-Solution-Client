import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Footer from '../Footer/Footer';
import Mission from '../Mission/Mission';
import QualityPolicy from '../QualityPolicy/QualityPolicy';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Mission></Mission>
            <QualityPolicy></QualityPolicy>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;