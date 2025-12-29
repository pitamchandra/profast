import React from 'react';
import Banner from '../banner/Banner';
import Services from '../services/Services';
import ClientMarquee from '../ClientMarquee/ClientMarquee';
import BenefitsSection from '../benefits/BenefitsSection';
import BeMerchant from '../BeMerchant/BeMerchant';

const Home = () => {
    return (
        <>
          <Banner></Banner>
          <Services></Services>
          <ClientMarquee></ClientMarquee>
          <BenefitsSection></BenefitsSection>
          <BeMerchant></BeMerchant>
        </>
    );
};

export default Home;