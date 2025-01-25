import { Link } from "react-router";

// export default function c() {
//   return (
//     <>
//       <div className="big">
//         <Link>Characters</Link>
//         <Link>Episodes</Link>
//         <Link>Titans</Link>
//       </div>
//     </>
//   );
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBarBig() {
  return (
    <>
    <div className="bigNavBar">
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
      
    </>
  );
}

