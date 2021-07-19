
import { useState } from "react";
import {Card,Button,Image} from 'react-bootstrap';
import page1 from './page1.jpg';

const Menu = ( ) => {
    
    return ( 
     <div className="menu"  >
         
         <h1> Welcome to  Diva's Hair Salon!</h1>
    <p><h5>Openned since 1998, taking care of your hair is no longer a secret for us</h5></p>
         <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Adress</Card.Title>
            <Card.Text>
                145 Bank St, Ottawa ON K1S7W9
            </Card.Text>
            <Card.Title>Phone Numver</Card.Title>
            <Card.Text>
                613-589-7245
            </Card.Text>
            <Card.Title>Openning Hours</Card.Title>
            <Card.Text>
                Monday-Friday :9 AM- 7PM
                Saturday and Sunday: 9 AM - 9PM
            </Card.Text>
            <Card.Title>Email</Card.Title>
            <Card.Text>
                Diva'shairsalon@gmail.ca
            </Card.Text>
        </Card.Body>
    </Card>
    
    
    
    </div>
    

    
      
     );
}
 
export default Menu;