import React, { useState, useEffect } from "react";
import { Container,Row,Col,Navbar,Nav } from 'react-bootstrap';

export default function About() {
    let small = "Small 'Focused' Batches";
    return(
        <div className="section mt-0">
            <div className="banner-img-container">
                <div className="banner-image">
                    <img className="height-60" src="https://refrance.s3.ap-south-1.amazonaws.com/homesfy/AboutUs.jpg" />
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="about-section-image">
                            <img src="assests/engineering.png" alt=""/>
                        </div>
                    </Col>
                    <Col>
                        <div className="about-section-title">
                            <h1 className="font-24">About Katalyst Academy</h1>
                            <p className="font-16">For the longest of times, buying a house or investing in real estate has been a big financial question for many individuals in India. Homesfy was established in 2013 with the aim to simplify the home buying process and to make the real estate transaction reliable, trustworthy, and hassle-free. We are one of the leading and fastest-growing company in the real estate brokerage industry. Our aim is to provide relevant and personalized home solutions.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="vision-section">
                <Container>
                    <Row>
                        <Col>
                            <div className="about-section-title">
                                <h1 className="font-24">Why Us</h1>
                                <ul className="about-points-holder">
                                    <li className="about-points-list">Highly Qualified & Experienced Faculty</li>
                                    <li className="about-points-list">Proven Teaching Methodologies</li>
                                    <li className="about-points-list">{small}</li>
                                    <li className="about-points-list">Periodic Student Progress Analysis</li>
                                    <li className="about-points-list">Result Oriented Test Series</li>
                                    <li className="about-points-list">Regular Faculty - Parents Communication Sessions</li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="about-section-image">
                                <img src="assests/engineering.png" alt=""/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="teching-section">
                <Container>
                    <Row>
                        <Col>
                            <div className="about-section-image">
                                <img src="assests/engineering.png" alt=""/>
                            </div>
                        </Col>
                        <Col>
                            <div className="about-section-title">
                                <h1 className="font-24">Teaching Methodology</h1>
                                <ul className="about-points-holder">
                                    <li className="about-points-list">Individual Attention on progess of student</li>
                                    <li className="about-points-list">Revision & Doubts Clearing Sessions</li>
                                    <li className="about-points-list">Regular Assignments</li>
                                    <li className="about-points-list">Regular Test-Patterns</li>
                                    <li className="about-points-list">Systematic Theory</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}        