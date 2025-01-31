// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards(props) {
  return (
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={props.img} alt={`picture of ${props.name}`} className='cardImg'/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};