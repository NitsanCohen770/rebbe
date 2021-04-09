import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Portfolio from '../../components/portfolio';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import portfolioData from '../../data/portfolio/PortfolioLongHeight';

let PortfolioDefault = (props, ref) => {
  const slider = useRef(null);

  useImperativeHandle(ref, () => ({
    slickNext: () => {
      slider.current.slickPrev();
    },
    slickPrev: () => {
      slider.current.slickNext();
    },
  }));

  const carouselSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="content-body section">
      <div className="section-wrap section">
        <Container fluid>
          <Row>
            <Col className={'p-0'}>
              <Slider ref={slider} {...carouselSettings}>
                {portfolioData.map(portfolio => (
                  <div key={portfolio.id} className="col pl-5 pr-5">
                    <Portfolio
                      title={portfolio.title}
                      thumb={portfolio.thumb}
                      category={portfolio.category}
                      classes={'portfolio-screen-height'}
                      link={portfolio.link}
                    />
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default forwardRef(PortfolioDefault);
