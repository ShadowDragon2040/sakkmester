import React from 'react';
import {BrowserRouter as Router, NavLink,Routes,Route} from "react-router-dom";
import {SakkCreatePage} from "./SakkCreatePage";
import {SakkSinglePage} from "./SakkSinglePage";
import {SakkListPage} from "./SakkListPage";
import {SakkModositPage} from "./SakkModositPage";
import {SakkDeletePage} from './SakkDeletePage';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink to={`/`} className="nav-link">
                <span>Sakk mesterek</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/ujSakk`} className="nav-link">
                <span>Új sakk bejegyzés</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<SakkListPage/>}/>
        <Route path='/Sakk/:SakkId' element={<SakkSinglePage/>}/>
        <Route path='/ujSakk' element={<SakkCreatePage/>}/>
        <Route path='/modositSakk/:SakkId' element={<SakkModositPage/>}/>
        <Route path='/deleteSakk/:SakkId' element={<SakkDeletePage/>}/>
      </Routes>
    </Router>
  );
}
export default App;