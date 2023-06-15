import { Navbar, Container} from 'react-bootstrap';
export default function Detail(props) {
    return (
        <div id="detailWrap">
            <Navbar id='naverNav' bg="light" variant="light">
                    <Container>
                    <Navbar.Brand href="#home">
                      <img src={props.bg} alt="logo" className='logo' />
                      Shoer
                    </Navbar.Brand>
                    </Container>
            </Navbar>
            <header id="sellerHeader">
                <nav id='top'></nav>
                <nav id='bottom'></nav>
            </header>
            <div id="container">
                <nav className="snsIndicator">
                    <div className="snsbox"></div>
                    <div className="indicatorBox"></div>
                </nav>
                
            </div>  
        </div>
    )
};
