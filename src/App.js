import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button, Nav, NavDropdown, CardGroup } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';
import items from './items.js';
import ItemCard from './Components/ItemCard.js';
import Detail from './Components/Detail.js';
import { Routes, Route, Link } from 'react-router-dom';
// ?3자리 9마다 반점?
function App() {
  const [item, setItem] = useState(items)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <div className="bg" style={{ background: 'url(' + bg + ') no-repeat center center/100% 100%', height: '100vh'}
        }>
            <Link to="/main">
            <Button>Enter</Button></Link>
        </div>
      }>
        </Route>
          <Route path="/main" element={
            <div id='wrap'>
              <header id="header">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
                  <Container fluid>
                    <Navbar.Brand href="#home">
                      <img src={bg} alt="logo" className='logo' />
                      Shoer
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                      <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                          Dank memes
                        </Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </header>
              <div id='container'>
                <div className="itemsSection">
                  <CardGroup>
                    {/* map: */}
                    {
                      items.map((a, i) => {
                        return (<ItemCard i={i} item={item[i]} Link={Link} />)
                      })
                    }
                  </CardGroup>
                </div>
              </div>
            </div>
          }></Route>
        <Route path="/detail" element={<Detail bg={bg}/>}></Route>
      </Routes>
      {/* inline으로 이미지 넣기 연습+문자 따옴표 연습: */}
      {/* <div className="bg" style={{ background: 'url(' + bg + ') no-repeat center center/100% 100%', height: '60vh' }}>
        </div> */}
    </div>
  );
}

export default App;
