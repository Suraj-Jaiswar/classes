import Link from 'next/link';
import { Container,Row,Col,Navbar,Nav } from 'react-bootstrap';
import {BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill, BsInstagram, BsFacebook, BsLinkedin} from 'react-icons/bs';

function Footer() {
    return ( 
        <div className="footer">
            <Container fluid className="footer-container">
                <Row className="pdl-20">
                    <Col>
                        <div className="main-tags">
                            Quick Links
                        </div>
                        <ul className="sub-link sub-link-height">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/cources">
                                    <a>Cources</a>
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/about">
                                    <a>About Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a>Contact Us</a>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="main-tags">
                            Contact Us
                        </div>
                        <ul className="sub-link">
                            <li>
                                <div className="footer-icon-text sub-link-height">
                                    <a href={"tel:8097729557"} target="_blank" rel="noreferrer">
                                        <BsTelephoneFill/>
                                        <span>8779265557 / 8097729557</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="footer-icon-text sub-link-height">
                                    <BsEnvelopeFill/><span>katalystacademy555@gmail.com</span>
                                </div>
                            </li>
                            <li>
                                <div className="footer-icon-address">
                                    <BsGeoAltFill/><span>Office No.801, D Square Bldg, Dadabhai Road, Opp. CNM School, Vile Parle (W), Mumbai-400056</span>
                                </div>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="main-tags">
                            Social Links
                        </div>
                        <ul className="sub-link sub-link-height">
                            <li>
                                <div className="social-wrapper">
                                    {/* <div className="social-holder">
                                        <BsFacebook size='30'/>
                                    </div> */}
                                    <div className="social-holder">
                                        <a href="https://instagram.com/katalystacademy?utm_medium=copy_link" target="_blank" rel="noreferrer">
                                            <BsInstagram size='30'/>
                                        </a>
                                    </div>
                                    {/* <div className="social-holder">
                                        <BsLinkedin size='30'/>
                                    </div> */}
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="border-top">
                    <div className="footer-rights font-14">
                        @2022 katalyst Academy Pvt. Ltd.
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;