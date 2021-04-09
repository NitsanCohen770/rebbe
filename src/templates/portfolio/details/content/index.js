import React from 'react';
import Chrono from '../../../../components/react-chrono/Chrono';

const PortfolioDetailsContent = ({ chromoData }) => {
  return (
    <div className="portfolio-details-content">
      <Chrono chromoData={chromoData}></Chrono>
    </div>
  );
};

export default PortfolioDetailsContent;
