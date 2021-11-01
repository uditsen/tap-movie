import {Navbar,Container,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Movies App</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/add-movie" className="nav-link">Add Movies</Link>
      <Link to="/help" className="nav-link">Help</Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;
