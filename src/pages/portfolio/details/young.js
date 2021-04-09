import React, { Fragment } from 'react';
import Header from '../../../components/header/HeaderOne';
import SideHeader from '../../../components/SideHeader';
import FooterThree from '../../../components/footer/FooterThree';
import TemplatePortfolioDetails from '../../../templates/portfolio/details';
import youngData from '../../../data/Chrono-data/youngData';

const PortfolioDetailsPage = () => {
  console.log(youngData);
  return (
    <Fragment>
      <Header classes={'position-static'} />
      <SideHeader mobile={true} />

      <TemplatePortfolioDetails chromoData={youngData} />

      <FooterThree position="fixed" />
    </Fragment>
  );
};

export default PortfolioDetailsPage;
