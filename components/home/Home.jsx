import React, { useState, useEffect } from "react";
import { Container,Row,Col } from 'react-bootstrap';
import Slider from "react-slick";
import {RiDoubleQuotesL} from 'react-icons/ri';
import HomeSlider from './HomeSlider';
function HomePage() {
    let home = "Today's era is full of competition. Standard 10th & 12th are most crucial aspects of life. it is truly said, 'To become academically strong, we need to conquer these two crucial stages i.e. 10th & 12th,' Student's aspirations lead towards their career avenues. True guidance is needed in 10th & 12th standard. No personal attention is given to the students in school & coaching classes due to more number of students. Basic concepts of students remained unclear because they are anxious about asking doubts in the class.Students get easily bored since they do not get hang of specific subject which results in failure.";

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        centerPadding: "0px",
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
        ],
    };

  return (
    <div className={''}>
        <div className="section mt-0">
            <div className="banner-holder">
                <HomeSlider/>    
            </div>
        </div>

        <div className="section course">
            <div className="course-heading">
                <h1>Our Courses</h1>
                <span className="divider">
                    <span className="line"></span>
                    <span className="circle"></span>
                    <span className="line"></span>
                </span>
            </div>
            <div className="course-details">
                <div className="course-wrapper">
                    <Container>
                        <Row className="">
                            <Col>
                                <div className="course-column">
                                    <div className="course-img-wrapper">
                                        <img src='assests/engineering.png' alt='Maths'></img>
                                    </div>
                                    <div className="course-name">Maths</div>
                                </div>
                            </Col>
                            <Col>
                                <div className="course-column">
                                    <div className="course-img-wrapper">
                                        <img src='assests/global-educare.png' alt='Science'></img>
                                    </div>
                                    <div className="course-name">Science</div>
                                </div>
                            </Col>
                            <Col>
                                <div className="course-column">
                                    <div className="course-img-wrapper">
                                        <img src='assests/medical.png' alt='Commerce'></img>
                                    </div>
                                    <div className="course-name">Commerce</div>
                                </div>
                            </Col>
                            <Col>
                                <div className="course-column">
                                    <div className="course-img-wrapper">
                                        <img src='assests/foundation-builder.png' alt='Medical'></img>
                                    </div>
                                    <div className="course-name">Medical</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>

        <div className="section">
            <Container>
                <div className="welcome-title-wrap">
                    <div className="welcome-title">
                        Welcome To katalyst Academy
                    </div>
                    <span className="divider">
                        <span className="line"></span>
                        <span className="circle"></span>
                        <span className="line"></span>
                    </span>
                </div>
                <div className="welcome-msg">
                    <div className="welcome-msg-wrap">
                        <div className="welcome-quote">
                            <div className="welcome-msg-icon">
                                <RiDoubleQuotesL size='200'/>
                            </div>
                        </div>
                        <div className="welcome-msg-holder">
                            <p>
                                {home}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default HomePage;