import React, { Fragment } from 'react';
import Header from '../../../components/header/HeaderOne';
import SideHeader from '../../../components/SideHeader';
import FooterThree from '../../../components/footer/FooterThree';
import TemplatePortfolioDetails from '../../../templates/portfolio/details';
import firstData from '../../../data/Chrono-data/firstYearsData';

const PortfolioDetailsPage = () => {
  return (
    <Fragment>
      <Header classes={'position-static'} />
      <SideHeader mobile={true} />

      <TemplatePortfolioDetails chromoData={firstData} />
      <FooterThree position="fixed" />
    </Fragment>
  );
};

export default PortfolioDetailsPage;
