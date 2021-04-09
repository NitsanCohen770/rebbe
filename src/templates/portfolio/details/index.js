import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageContainer from '../../../container/CustomPage';
import PortfolioDetailsThumb from './thumbnail';
import PortfolioDetailsContent from './content';
import portfolioDetailsData from '../../../data/portfolio/details';

const TemplatePortfolioDetails = ({ chromoData }) => {
  console.log(chromoData);
  return (
    <PageContainer classes={'bg-grey'}>
      <Container>
        <PortfolioDetailsContent chromoData={chromoData} />
      </Container>
    </PageContainer>
  );
};

export default TemplatePortfolioDetails;
