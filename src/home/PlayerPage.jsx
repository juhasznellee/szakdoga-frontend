import './App.css';
import youngWoman from '../images/young_woman.png';
import youngMan from '../images/young_man_home.png';
import React, { useState, useEffect } from 'react';
import DescPopup from '../component/GameDescPopup.jsx';
import 'semantic-ui-css/semantic.min.css';
import ErrorMsg from '../component/ErrorMsg.jsx';

function PlayerPage() {
  const [isActive_Man, setIsActive_Man] = useState(false);
  const [isActive_Woman, setIsActive_Woman] = useState(false);
  const [isActive_ManInput, setIsActive_ManInput] = useState(true);
  const [isActive_WomanInput, setIsActive_WomanInput] = useState(true);
  const [playerName, setPlayerName] = useState("");  
  const [errorMsg, setErrorMsg] = useState(false);

  const handleClick1 = () => {
    setErrorMsg(false);
    if(!isActive_Woman && !isActive_Man){
      setIsActive_Woman(current => !current);
      setIsActive_Man(current => current);
      setIsActive_WomanInput(current => !current);
      setIsActive_ManInput(current => current);
    }else if(isActive_Woman && !isActive_Man){
      setIsActive_Woman(current => !current);
      setIsActive_Man(current => current);
      setIsActive_WomanInput(current => !current);
      setIsActive_ManInput(current => current);
    }else{
      setIsActive_Woman(current => !current);
      setIsActive_Man(current => !current);
      setIsActive_WomanInput(current => !current);
      setIsActive_ManInput(current => !current);
    }
  };
  const handleClick2 = () => {
    setErrorMsg(false);
    if(!isActive_Woman && !isActive_Man){
      setIsActive_Woman(current => current);
      setIsActive_Man(current => !current);
      setIsActive_WomanInput(current => current);
      setIsActive_ManInput(current => !current);
    }else if(!isActive_Woman && isActive_Man){
      setIsActive_Woman(current => current);
      setIsActive_Man(current => !current);
      setIsActive_WomanInput(current => current);
      setIsActive_ManInput(current => !current);
    }else{
      setIsActive_Woman(current => !current);
      setIsActive_Man(current => !current);
      setIsActive_WomanInput(current => !current);
      setIsActive_ManInput(current => !current);
    }
  };

  const setName = e => {
    setPlayerName(e.target.value);
  };

  const insertCharacterInfo = () => {
    if(isActive_Woman && !isActive_Man && playerName.length > 0){
      fetch("http://localhost/szakdoga-backend/php/insert_player.php?player=n&name=" + playerName);
      window.location.href="http://localhost:3000/game";
    }else if(!isActive_Woman && isActive_Man && playerName.length > 0){
      fetch("http://localhost/szakdoga-backend/php/insert_player.php?player=f&name=" + playerName);
      window.location.href="http://localhost:3000/game";
    }else{
      setErrorMsg(true);
    }
  };

  useEffect(() => {
    document.title = "Főoldal"
  }, []);

  return (
    <div className='App'>
      <div id='main-background'>
        <div><a href="http://localhost:3000/login"><button className='button-login'>Bejelentkezés</button></a></div>
        <div id='cim'>Educative Gamification</div>
        <div className='mainRow'>
          <div className='columns'>
            <img alt='youngWoman'src={youngWoman} className='player-woman' style={{
            scale: (isActive_Woman && !isActive_Man) ? '103%' : '',
            filter: (isActive_Woman && !isActive_Man) ? 'brightness(100%)' : 'brightness(70%)'
          }} onClick={handleClick1}/><br/>
          <input type='text' placeholder="Adjon meg egy nevet" name='playerNameWoman' id='playerNameWoman' autoComplete="off" onChange={setName} disabled={isActive_WomanInput} style={{
            filter: (isActive_Woman && !isActive_Man) ? 'brightness(100%)' : 'brightness(70%)'
          }}/>
          </div>
          <div className='columns'>
            <div className='buttons' id='main-column'>
              <button id='button-start-player' onClick={insertCharacterInfo}>
                Start
              </button><br/>
              <div id='start-error-message'>
                <ErrorMsg place="home" active={errorMsg}/>
              </div>
              <DescPopup/><br/>
            </div>
          </div>
          <div className='columns'>
            <img alt='youngMan' src={youngMan} className='player-man'  style={{
            scale: (isActive_Man && !isActive_Woman) ? '103%' : '',
            filter: (isActive_Man && !isActive_Woman)  ? 'brightness(100%)' : 'brightness(70%)'
          }} onClick={handleClick2}/><br/>
          <input type='text' placeholder="Adjon meg egy nevet" name='playerNameMan' id='playerNameMan' autoComplete="off" onChange={setName} disabled={isActive_ManInput} style={{
            filter: (isActive_Man && !isActive_Woman)  ? 'brightness(100%)' : 'brightness(70%)'
          }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
