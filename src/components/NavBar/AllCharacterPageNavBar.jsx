import Nav from 'react-bootstrap/Nav';
//defaultActiveKey="/characters"
//href="/characters"
export default function AllCharactersPageNavBar(props) {
    
    function handleClickAllChararacter() {
        props.showAllCharacters();
    }
    function handleClickFavCharacters() {
        props.showFavCharacters()
    }
  return (
    <Nav variant="tabs" defaultActiveKey="0" className='AllCharOrFavChar'>
      <Nav.Item>
        <Nav.Link eventKey="0" onClick={handleClickAllChararacter} ><p className='AllCharOrFavChar'>All Characters</p></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="1" onClick={handleClickFavCharacters} ><p className='AllCharOrFavChar'>Favourite Characters</p></Nav.Link>
      </Nav.Item>

    </Nav>
  );
}