import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Dashboard() {
    const records = {
        total_test: 45,
        total_pass: 20,
        total_fail: 10,
        total_skip: 10,
        total_todo: 10,
        total_todo_pass: 10,
    }
    return (
        <Container>
            <Row style={{ marginTop: '20px' }}>
                <Col xs={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>All Test(s)</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            <Button variant="outline-danger">{records.total_test} </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Practice Test(s)</Card.Title>
                            <Button variant="outline-danger">{records.total_fail}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Practice Test(s)</Card.Title>
                            <Button variant="outline-danger">{records.total_skip}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Submitted Test(s)</Card.Title>
                            <Button variant="outline-danger">{records.total_todo}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}}>
                <Col xs={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Result Available</Card.Title>
                            <Button variant="outline-danger">{records.total_todo_pass}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Online Classroom</Card.Title>
                            <Button variant="outline-danger">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Call Tech Support</Card.Title>
                            <Button variant="outline-danger">+91-9991683777</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>WhatsApp Tech Support</Card.Title>
                            <Button variant="outline-danger">Start</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;