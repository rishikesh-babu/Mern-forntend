import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ book }) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={book.thumbnailUrl} />
            <Card.Body>
                <Card.Title> {book.title} </Card.Title>
                <Card.Text>
                   {book.categories[0]}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;