import React from 'react';
import { Image, Navbar, Nav, Button } from 'react-bootstrap';

//import BK from './../../assets/DSC_0314.JPG';
import GH from './../../assets/GH.png';
import LI from './../../assets/LinkedInBnW.png';
import SP from './../../assets/spotifyBnW.png';
import IG from './../../assets/IG-BnW.png';

function BKNavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{ alignContent: 'left' }}>
        <Navbar.Brand href="/" style={{ alignSelf: 'center' }}>
          <Button size="sm" variant="light">
            <h3
              style={{
                padding: '0.4vmin',
                marginLeft: '-1vmin',
                marginRight: '-1vmin',
                marginTop: '0.2vmin',
                marginBottom: '0.2vmin',
                color: '#000000',
                fontSize: '5vmin',
                fontFamily: 'futura',
              }}
            >
              bkö
            </h3>
          </Button>
        </Navbar.Brand>
        <Nav
          className="mr-auto"
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <Nav.Link
            style={{ margin: '0.2vmin' }}
            href="https://github.com/BrunoKoppel"
          >
            <Button size="sm" variant="light">
              <Image
                src={GH}
                style={{ width: '5vmin' }}
                alt="logo"
                rounded
                fluid
              />
            </Button>
          </Nav.Link>

          <Nav.Link
            style={{ margin: '0.2vmin' }}
            href="https://www.linkedin.com/in/bruno-koppel"
          >
            <Button size="sm" variant="light">
              <Image
                src={LI}
                style={{ width: '5vmin' }}
                alt="logo"
                rounded
                fluid
              />
            </Button>
          </Nav.Link>

          <Nav.Link
            style={{ margin: '0.2vmin' }}
            href="https://open.spotify.com/artist/5XK2KlEZ95yiEOqE8BcbgE?si=O6LJDkVWTc-bZ6QWzuuuGA"
          >
            <Button size="sm" variant="light">
              <Image
                src={SP}
                style={{ width: '5vmin' }}
                alt="logo"
                rounded
                fluid
              />
            </Button>
          </Nav.Link>

          <Nav.Link
            style={{ margin: '0.2vmin' }}
            href="https://www.instagram.com/bruno_koppel/"
          >
            <Button size="sm" variant="light">
              <Image
                src={IG}
                style={{ width: '5vmin' }}
                alt="logo"
                rounded
                fluid
              />
            </Button>
          </Nav.Link>

          <Nav.Link
            style={{ margin: '0.2vmin', right: '2vmin', position: 'absolute' }}
            aria-controls="basic-navbar-nav"
          >
            <Button size="sm" variant="light">
              {/* <Image src={BK} style={{width: "5vmin"}} alt="logo" rounded fluid/> */}
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default BKNavBar;
