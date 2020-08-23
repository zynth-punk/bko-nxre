import React from 'react';
import { Image, Navbar, Nav, Button, Container } from 'react-bootstrap';

// import BK as logo from './../../index.d.ts';
import GH from './../../assets/GH.png';
import LI from './../../assets/LinkedInBnW.png';
import SP from './../../assets/spotifyBnW.png';
import IG from './../../assets/IG-BnW.png';

import './nav-bar.scss';

function BKNavBar() {
  return (
    <>
      <Navbar
        className="container"
        bg="light"
        expand="lg"
        style={{
          display: 'flex',
          textAlign: 'left',
          alignContent: 'left',
          alignItems: 'stretch',
        }}
      >
        <Navbar.Brand style={{ margin: '0.2vmin', display: 'flex' }}>
          <Button href="/" size="sm">
            <h4
              style={{
                padding: '0.4vmin',
                marginLeft: '-1vmin',
                marginRight: '-1vmin',
                marginTop: '0.2vmin',
                marginBottom: '0vmin',
                color: '#000000',
                fontSize: '7vmin',
                fontFamily: 'monospace',
              }}
            >
              bkö
            </h4>
          </Button>
        </Navbar.Brand>
        <Nav
          className="mr-auto"
          style={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'left',
            alignContent: 'left',
            alignItems: 'stretch',
          }}
        >
          <Nav.Link
            style={{ margin: '0.2vmin', display: 'flex' }}
            href="https://github.com/BrunoKoppel"
          >
            <Button size="sm">
              <Image
                src={GH}
                style={{ width: '6vmin' }}
                alt="logo"
                rounded
                fluid
              />
            </Button>
          </Nav.Link>

          <Nav.Link
            style={{ margin: '0.2vmin', display: 'flex' }}
            href="https://www.linkedin.com/in/bruno-koppel"
          >
            <Button size="sm">
              <Image
                src={LI}
                style={{ width: '6vmin' }}
                alt="logo"
                rounded
                fluid
              />
            </Button>
          </Nav.Link>

          <Nav.Link
            style={{ margin: '0.2vmin', display: 'flex' }}
            href="https://open.spotify.com/artist/5XK2KlEZ95yiEOqE8BcbgE?si=O6LJDkVWTc-bZ6QWzuuuGA"
          >
            <Button size="sm">
              <Image
                src={SP}
                style={{ width: '6vmin' }}
                alt="logo"
                rounded
                fluid
              />
            </Button>
          </Nav.Link>

          <Nav.Link
            style={{ margin: '0.2vmin', display: 'flex' }}
            href="https://www.instagram.com/bruno_koppel/"
          >
            <Button size="sm">
              <Image
                src={IG}
                style={{ width: '6vmin' }}
                alt="logo"
                rounded
                fluid
              />
            </Button>
          </Nav.Link>

          <Nav.Link
            style={{
              margin: '0.2vmin',
              right: '2vmin',
              position: 'absolute',
            }}
            aria-controls="basic-navbar-nav"
          >
            <Button size="sm">
              {/* <Image
                src={BK}
                style={{ width: '6vmin' }}
                alt="logo"
                rounded
                fluid
              /> */}
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default BKNavBar;
