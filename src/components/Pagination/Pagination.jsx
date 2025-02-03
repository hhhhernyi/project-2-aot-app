import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



export default function PageButton(props) {
    function handleNextClick( ) {
        if (props.pageNumber === props.totalPages) {
            console.log('cannot increase anymore')
        } else {
            props.increasePageNumber();
            props.getNext();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

    }
    function handlePrevClick () {
        if (props.pageNumber===1) {
            console.log('cannot go back')
        } else {
            props.decreasePageNumber();
            // i need to change the episodes state to get itesm of the prev_page item
            props.getPrev();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={handlePrevClick}>Previous Page</Button>
      <Button variant="secondary">{props.pageNumber}</Button>
      <Button variant="secondary" onClick={handleNextClick}>Next Page</Button>
    </ButtonGroup>
  );
}

