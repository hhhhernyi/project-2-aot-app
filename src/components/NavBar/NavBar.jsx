import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Attack on Titans Database</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="home">home</Nav.Link>
            <Nav.Link href="characters">characters</Nav.Link>
            <Nav.Link href="episodes">episodes</Nav.Link>
            <Nav.Link href="titans">titans</Nav.Link>
            <Nav.Link href="locations">locations</Nav.Link>
            <Nav.Link href="organizations">organizations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
