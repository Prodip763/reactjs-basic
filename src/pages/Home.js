import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mx-auto gap-4" >
            <Link  to='/about'style={{
            textDecoration: 'none'
          }}>About</Link>
            <Link to='/data' style={{
            textDecoration: 'none'
          }} >Data</Link>

          </Nav>
        </Container>
      </Navbar>
    );
};

export default Home;