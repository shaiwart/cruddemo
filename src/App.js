import { Outlet, Link } from 'react-router-dom';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// Nav bar 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() { 
  return (
    <div>
      {/* <nav>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light"><Link to='/Home'> Home </Link></Button>
          <Button variant="outline-light"> <Link to='/ContactUs' >ContactUs</Link>  </Button>
          <Button variant="outline-light"> <Link to='/ListProduct' >ListProduct</Link> </Button>
          <Button variant="outline-light"> <Link to='/ListEmployee' >ListEmp</Link> </Button>
        </ButtonGroup>

      </nav> */}

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/ListEmployee">Employee</Nav.Link>
            <Nav.Link href="/ContactUs">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className='MainBody'>
        <Outlet />
      </div>
      

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  );
}

export default App;
