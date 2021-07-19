import { useState } from 'react';
import { Form, Button,Label,Card,Container,Row,Col, Alert } from 'react-bootstrap';
const Services = () => {
    const[name,SetName]=useState('');
    const handleClick =() =>{
        SetName('Submitted!We will get back to you with our availabilities');
    }

    return ( 
    <div className="services">
        <h1>Our services</h1>
  
<Container>
  <Row >
    <Col>      
    <Card style={{ width: '18rem' }}>
        <Card.Body>
    <Card.Title>To book an Appointement with us </Card.Title>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First and Last name</Form.Label>
    <Form.Control type="Name" placeholder="Enter your First and Last Name" />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter your email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phone Number" placeholder="Enter your phone number" />
  </Form.Group>
  <Form.Text className="text-muted">
      Choose the type of Service you want to have.
    </Form.Text>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Wash" />
    <Form.Check type="checkbox" label="Deep condition" />
    <Form.Check type="checkbox" label="Cut" />
    <Form.Check type="checkbox" label="Color" />
    <Form.Check type="checkbox" label="Styles" />
  </Form.Group>
  <p>{name}</p>
  <Button variant="success"  onClick={handleClick}>
    Submit
  </Button>
</Form>
</Card.Body>
</Card></Col>
<Col><Row>
<Card>
    <Card.Body>
      <Card.Title>Wash $20</Card.Title>
      <Card.Text>
        We will wash your hair with the best shampoo in the market.Your scalp will breathe and be clean.
      </Card.Text>
    </Card.Body>
    </Card>

    <Col><Card>
    <Card.Body>
      <Card.Title>Deep Condition $20 </Card.Title>
      <Card.Text>
        Our deep Coditionner will nourrish and hydrate your hair.
      </Card.Text>
    </Card.Body>
    </Card>
    </Col>
    </Row></Col>
    <Col>
    <Row>
        <Card>
    <Card.Body>
      <Card.Title>Cut $50 and up</Card.Title>
      <Card.Text>
        Our professionals will cut all of the extra hair to prevent your hair from breaking.
      </Card.Text>
    </Card.Body>
    </Card>
    <Col><Card>
    <Card.Body>
      <Card.Title>Color $60 and up</Card.Title>
      <Card.Text>
        We have all the colors, just choose one in the store and watch the magic.
      </Card.Text>
    </Card.Body>
    </Card></Col>
    </Row></Col>
    <Col><Card>
    <Card.Body>
      <Card.Title>Styles $40 and up</Card.Title>
      <Card.Text>
        Come to the salon we have a ton of styles in our albums you can choose from.
      </Card.Text>
    </Card.Body>
    </Card></Col>
  </Row>
  
  
</Container>
</div>
     );
}
 
export default Services;