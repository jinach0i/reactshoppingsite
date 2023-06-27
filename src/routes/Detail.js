import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Header from '../components/Header.js';
export default function Detail(props) {
  return (
    <div id="detailWrap">
      <Header bg={props.bg}/>
      <header id="sellerHeader">
        <nav id='top'></nav>
        <nav id='bottom'></nav>
      </header>
      <div id="container">
        <div className="top">
          <nav className="breadcrumbs">
            <div className="snsbox"></div>
            <div className="indicatorBox"></div>
          </nav>
          <div className="left">
            <img src={props.bg} alt="" />
          </div>
          <div className="right">
            <div className="namebox"></div>
            <div className="choosebox"></div>
            <div className="consistsbox"></div>
          </div>
        </div>
      </div>
    </div>
  )
};
