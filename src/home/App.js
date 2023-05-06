import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PlayerPage from './PlayerPage';
import AdminPage from './AdminPage';
import {LoginPage} from './LoginPage';
import Game from '../game/Game';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PlayerPage/>}></Route>
          <Route exact path='/login' element={<LoginPage/>}></Route>
          <Route exact path='/admin' element={<AdminPage/>}></Route>
          <Route exact path='/game' element={<Game/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
