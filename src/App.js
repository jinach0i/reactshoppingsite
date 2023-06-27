import ItemCard from './components/ItemCard.js';
import Header from './components/Header.js';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Button, CardGroup } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';
import items from './utilites/items.js';
import Detail from './routes/Detail.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
// ?3자리 9마다 반점?
function App() {
  const [item] = useState(items);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <div className="bg" style={{ background: 'url(' + bg + ') no-repeat center center/100% 100%', height: '100vh' }
          }>
              <Button onClick={() => {navigate('/main')}}>Enter</Button>
          </div>
        }>
        </Route>
        <Route path="/main" element={
          <>
            <Header bg={bg} navigate={navigate}/>
            <div id='container'>
              <div className="itemsSection">
                <CardGroup>
                  {/* map: */}
                  {
                    item.map((a, i) =>{
                      return (
                      <ItemCard  key={i} i={i} item={item[i]} navigate={navigate} />
                      )
                    })
                  }
                </CardGroup>
              </div>
            </div>
          </>
        }></Route>
        <Route path="/detail" element={<Detail bg={bg} />}></Route>
        <Route path="/event" element={<div>오늘의이벤트</div>}>
          <Route path='one' element={<div>
            오늘의 이벤트
            <Outlet></Outlet>
          </div>}></Route>
          <Route path='two' element={<div>
            오늘의 이벤트
            <Outlet></Outlet>
          </div>}></Route>
        </Route>
        <Route path='*' element={
          <div className='detailAbox'>
            <img src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png" alt="sad face" />
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>The page are looking for doesn't exist or an other error ouccrred.</p>
            <p>Go back, or head over to previous page to choose a new direction.</p>
          </div>
        }>
        </Route>
      </Routes>
      {/* inline으로 이미지 넣기 연습+문자 따옴표 연습: */}
      {/* <div className="bg" style={{ background: 'url(' + bg + ') no-repeat center center/100% 100%', height: '60vh' }}>
        </div> */}
    </div>
  );
}
export default App;