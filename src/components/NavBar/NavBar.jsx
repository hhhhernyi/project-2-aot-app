import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand href="/home">Attack on Titans Database</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="home"><Link to='/home' className="navBarLinks">Home</Link></Nav.Link>
            <Nav.Link href="characters"><Link to='/characters' className="navBarLinks">Characters</Link></Nav.Link>
            <Nav.Link href="episodes"><Link to='/episodes' className="navBarLinks">Episodes</Link></Nav.Link>
            <Nav.Link href="titans"><Link to='/titans' className="navBarLinks">Titans</Link></Nav.Link>
            <Nav.Link href="locations"><Link to='/locations' className="navBarLinks">Locations</Link></Nav.Link>
            <Nav.Link href="organizations"><Link to='/organizations' className="navBarLinks">Organizations</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
