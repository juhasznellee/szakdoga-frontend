import './App.css';
import youngWoman from '../images/young_woman.png';
import youngMan from '../images/young_man_home.png';
import React, { useState, useEffect } from 'react';
import DescPopup from '../component/GameDescPopup.jsx';
import 'semantic-ui-css/semantic.min.css';

function AdminPage() {
  const [isActiveMan, setIsActiveMan] = useState(false);
  const [isActiveWoman, setIsActiveWoman] = useState(false);
  const [isActiveManInput, setIsActiveManInput] = useState(true);
  const [isActiveWomanInput, setIsActiveWomanInput] = useState(true);
  const [playerName, setPlayerName] = useState("");

  const handleClick1 = () => {
    if (!isActiveWoman && !isActiveMan) {
      setIsActiveWoman(current => !current);
      setIsActiveMan(current => current);
      setIsActiveWomanInput(current => !current);
      setIsActiveManInput(current => current);
    } else if (isActiveWoman && !isActiveMan) {
      setIsActiveWoman(current => !current);
      setIsActiveMan(current => current);
      setIsActiveWomanInput(current => !current);
      setIsActiveManInput(current => current);
    } else {
      setIsActiveWoman(current => !current);
      setIsActiveMan(current => !current);
      setIsActiveWomanInput(current => !current);
      setIsActiveManInput(current => !current);
    }
  };
  const handleClick2 = () => {
    if (!isActiveWoman && !isActiveMan) {
      setIsActiveWoman(current => current);
      setIsActiveMan(current => !current);
      setIsActiveWomanInput(current => current);
      setIsActiveManInput(current => !current);
    } else if (!isActiveWoman && isActiveMan) {
      setIsActiveWoman(current => current);
      setIsActiveMan(current => !current);
      setIsActiveWomanInput(current => current);
      setIsActiveManInput(current => !current);
    } else {
      setIsActiveWoman(current => !current);
      setIsActiveMan(current => !current);
      setIsActiveWomanInput(current => !current);
      setIsActiveManInput(current => !current);
    }
  };

  const setName = e => {
    setPlayerName(e.target.value);
  };

  const insertCharacterInfo = () => {
    if (isActiveWoman && !isActiveMan && playerName.length > 0) {
      fetch("http://localhost/szakdoga-backend/php/insert_player.php?player=n&name=" + playerName);
      window.location.href = "http://localhost:3000/game";
    } else if (!isActiveWoman && isActiveMan && playerName.length > 0) {
      fetch("http://localhost/szakdoga-backend/php/insert_player.php?player=f&name=" + playerName);
      window.location.href = "http://localhost:3000/game";
    }
  };

  useEffect(() => {
    document.title = "Főoldal"
  }, []);

  return (
    <div className='App'>
      <div id='main-background'>
        <div><a href="http://localhost:3000"><button className='button-login'>Kijelentkezés</button></a></div>
        <div id='cim'>Invesztopolisz</div>
        <div className='mainRow'>
          <div className='columns'>
            <img alt='youngWoman' src={youngWoman} className='player-woman' style={{
              scale: (isActiveWoman && !isActiveMan) ? '103%' : '',
              filter: (isActiveWoman && !isActiveMan) ? 'brightness(100%)' : 'brightness(70%)'
            }} onClick={handleClick1} /><br />
            <input type='text' placeholder="Adjon meg egy nevet" name='playerNameWoman' id='playerNameWoman' autoComplete="off" onChange={setName} disabled={isActiveWomanInput} style={{
              filter: (isActiveWoman && !isActiveMan) ? 'brightness(100%)' : 'brightness(70%)'
            }} />
          </div>
          <div className='columns'>
            <div className='buttons' id='main-column'>
              <button id='button-start-admin' onClick={insertCharacterInfo}>
                Start
              </button><br />
              <div id='start-message'>
                A képre kattintva válaszd ki a karakteredet, majd adj neki nevet!
              </div>
              <DescPopup /><br />
              <a href="http://localhost/szakdoga-backend/task/task_edit.php"><button className='button-edit' id='first'>
                Feladatok szerkesztése
              </button></a><br />
              <a href="http://localhost/szakdoga-backend/job/job_edit.php"><button className='button-edit'>
                Munkahelyek szerkesztése
              </button></a><br />
              <a href="http://localhost/szakdoga-backend/salary/salary_edit.php"><button className='button-edit'>
                Fizetések szerkesztése
              </button></a><br />
            </div>
          </div>
          <div className='columns'>
            <img alt='youngMan' src={youngMan} className='player-man' style={{
              scale: (isActiveMan && !isActiveWoman) ? '103%' : '',
              filter: (isActiveMan && !isActiveWoman) ? 'brightness(100%)' : 'brightness(70%)'
            }} onClick={handleClick2} /><br />
            <input type='text' placeholder="Adjon meg egy nevet" name='playerNameMan' id='playerNameMan' autoComplete="off" onChange={setName} disabled={isActiveManInput} style={{
              filter: (isActiveMan && !isActiveWoman) ? 'brightness(100%)' : 'brightness(70%)'
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
