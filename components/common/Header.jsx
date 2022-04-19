import { Container,Row,Col,Navbar,Nav } from 'react-bootstrap';
import Button from '@mui/material/Button';
import {BsTelephoneFill, BsEnvelopeFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import Link from 'next/link';
import {isMobile} from 'react-device-detect';

function Header(props) {

    return ( 
        <div className="header">
            {/* <Navbar className="p-0 contact-header">
                <Container>
                    <Nav className="justify-content-end">
                        <Nav.Link className="contact-link"><BsTelephoneFill/><span className="mgl-5">8779265557 / 8097729557</span></Nav.Link>
                        <Nav.Link className="contact-link"><BsEnvelopeFill/><span className="mgl-5">katalystacademy555@gmail.com</span></Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
            <Navbar bg="" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <Link href="/">
                            <img
                                alt=""
                                src="assests/logo.jpeg"
                                width="200"
                                className="d-inline-block align-top"
                            />
                        </Link>
                    </Navbar.Brand>
                        <Nav className="justify-content-end">
                            {isMobile ?
                                null
                                : 
                                <>
                                    <Nav.Link className="contact-link">
                                        <BsTelephoneFill/>
                                        <Link href={"tel:8779265557"} target="_blank">
                                            <span className="mgl-5">8779265557 / 8097729557</span>
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link className="contact-link"><BsEnvelopeFill/><span className="mgl-5">katalystacademy555@gmail.com</span></Nav.Link>
                                </>
                            }
                            <div className="burger-holder">
                                <Button onClick={()=>props.toggleDrawer(true)}><GiHamburgerMenu size='30'/></Button>
                            </div>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;