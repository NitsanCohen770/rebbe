import React, { Fragment } from 'react';
import Header from '../../../components/header/HeaderOne';
import SideHeader from '../../../components/SideHeader';
import FooterThree from '../../../components/footer/FooterThree';
import TemplatePortfolioDetails from '../../../templates/portfolio/details';
import laterYears from '../../../data/Chrono-data/laterYearsData';

const PortfolioDetailsPage = () => {
  return (
    <Fragment>
      <Header classes={'position-static'} />
      <SideHeader mobile={true} />

      <TemplatePortfolioDetails chromoData={laterYears} />
      <FooterThree position="fixed" />
    </Fragment>
  );
};

export default PortfolioDetailsPage;
