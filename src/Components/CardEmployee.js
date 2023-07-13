import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CardEmployee({employee}) {
    return(
        <div>
            <Card style={{ width: '20rem'  }}>
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                    <Card.Title>Employee Details</Card.Title>
                    <Card.Text>
                        Details of the employee
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><b>Id:</b> {employee.id}</ListGroup.Item>
                    <ListGroup.Item><b>Name:</b> {employee.name}</ListGroup.Item>
                    <ListGroup.Item><b>Email:</b> {employee.email}</ListGroup.Item>
                    <ListGroup.Item><b>Department:</b> {employee.department}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}