import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Thumbnail from '../../components/thumbnail';
import Content from '../../components/content';
import Skill from '../../components/skill';
import aboutData from '../../data/AboutMe';

const AboutMe = ({ type }) => {
  return (
    <div className={type !== 'page' ? 'section-padding section' : null}>
      <Container>
        <Row className={'align-items-center'}>
          <Col lg={6}>
            <Thumbnail
              classes={'about-thumbnail mb-md-30 mb-sm-30 mb-xs-30'}
              thumb={`about/${aboutData.thumb}`}
            />
          </Col>

          <Col lg={6}>
            <Content classes={'about-content'}>
              {type !== 'page' ? (
                <h3 className="block-title">ABOUT ME</h3>
              ) : null}
              <p>{aboutData.bio}</p>
              <ul className="personal-info">
                <li>
                  <span> מייל: </span>
                  {aboutData.skype}
                </li>
                <li>
                  <span>עבודות פרינלס: </span>
                  {aboutData.availability ? 'זמין.' : 'לא זמין.'}
                </li>
                <li>
                  <span>שפות: </span>
                  {aboutData.languages.map((language, index) => (
                    <p key={index} style={{ display: 'inline-block' }}>
                      {index !== aboutData.languages.length - 1
                        ? `${language},   `
                        : `${language}.   `}
                    </p>
                  ))}
                </li>
              </ul>

              <h3 className="block-title">יכולות:</h3>

              <div className="skill-wrap">
                {aboutData.skills.map(skill => (
                  <Skill
                    key={skill.id}
                    title={skill.title}
                    percentage={skill.percentage}
                  />
                ))}
                <a
                  target="_blank"
                  href="http://chabadpedia.co.il/index.php/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99"
                >
                  תודה לאתר חב"דפדיה , שממנו לקחתי את כל המידע על הרבי באתר זה.
                </a>
              </div>
            </Content>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
