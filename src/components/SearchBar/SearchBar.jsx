import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function SearchBar(props) {

  const [search, setSearch] = useState('')
  function handleSubmit (event) {
    event.preventDefault();
    props.searchFunction(search)
    setSearch('');
    
  }
  function handleReset (event) {
    event.preventDefault();
    setSearch('');
    props.searchFunction(search)
    props.reset()
    
  }
  function handleChange(event) {
    console.log(event.target.value)
    setSearch(event.target.value)
  }
  return (
    <Navbar className="bg-body-tertiary justify-content-between searchbar">
      <Form inline  className='forms'>
        <Row>
          <Col >
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={search}
              onChange={handleChange}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className='searchFormButton' onClick={handleSubmit}>Submit</Button>
            <Button type="submit" className='searchFormButton'onClick={handleReset}>Reset</Button>
          </Col>
          
        </Row>
      </Form>
    </Navbar>
  );
}
