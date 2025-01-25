// export default function NavBarSmall() {
//     return (
//         <>
//         <div className="small">
//             <select>
//                 <option>Characters</option>
//                 <option>Episodes</option>
//                 <option>Titans</option>
//             </select>

//         </div>
//         </>
//     )
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBarSmall() {
  return (
    <div className='smallNavBar'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="characters">Characters</NavDropdown.Item>
              <NavDropdown.Item href="episodes">Episodes</NavDropdown.Item>
              <NavDropdown.Item href="titans">Titans</NavDropdown.Item>
            </NavDropdown>
      </Container>
    </Navbar>
    </div>
    
  );
}
