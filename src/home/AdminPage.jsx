import './App.css';
import youngWoman from '../images/young_woman.png';
import youngMan from '../images/young_man_home.png';
import React, { useState, useEffect } from 'react';
import DescPopup from '../component/GameDescPopup.jsx';
import 'semantic-ui-css/semantic.min.css';

function AdminPage() {
  const [isActive_Man, setIsActive_Man] = useState(false);
  const [isActive_Woman, setIsActive_Woman] = useState(false);
  const [isActive_ManInput, setIsActive_ManInput] = useState(true);
  const [isActive_WomanInput, setIsActive_WomanInput] = useState(true);
  const [playerName, setPlayerName] = useState("");
  
  const handleClick1 = () => {
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

    }
  };

  useEffect(() => {
    document.title = "Főoldal"
  }, []);

  return (
    <div className='App'>      
      <div id='main-background'>
        <div><a href="http://localhost:3000"><button className='button-login'>Kijelentkezés</button></a></div>
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
              <button id='button-start-admin' onClick={insertCharacterInfo}>
                Start
              </button><br/>
              <div id='start-message'>
                A képre kattintva válaszd ki a karakteredet, majd adj neki nevet!
              </div>
              <DescPopup place="admin"/><br/>
              <a href="http://localhost/szakdoga-backend/task/task_edit.php"><button className='button-edit' id='first'>
                Feladatok szerkesztése
              </button></a><br/>
              <a href="http://localhost/szakdoga-backend/job/job_edit.php"><button className='button-edit'>
                Munkahelyek szerkesztése
              </button></a><br/>
              <a href="http://localhost/szakdoga-backend/salary/salary_edit.php"><button className='button-edit'>
                Fizetések szerkesztése
              </button></a><br/>
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

export default AdminPage;
