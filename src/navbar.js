import Logo from './logo';
import { Button,Nav } from 'react-bootstrap';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Logo/>
            <h1 >Diva's Hair Salon</h1>
            <div className="links">
            <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Menu</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Services</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Advices</Nav.Link>
  </Nav.Item>
  
</Nav>
            </div>
        </nav>
     );
}
 
export default Navbar;