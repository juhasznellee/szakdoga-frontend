import React, {useState, useEffect} from 'react';
import './Login.css';
import data from './login.json';
import back_icon from '../images/back_icon_f.png';

export const LoginPage = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [isSubmitted, setSubmit] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();         //submit hatására nem törli ki az értékeket
        if(name === data.name && pass === data.pass){
            setSubmit(true);
            window.location.replace('http://localhost:3000/admin');
        }else{
            setSubmit(false);
        }
    };

    useEffect(() => {
        document.title = 'Bejelentkezés'
    }, []);

    

    return (
        <div className='main-container'>
            <div className='login-container'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='login-error-message'>{isSubmitted ? '' : "Hibás bejelentkezés!"}</div>
                    <a href="http://localhost:3000" className='backPrevPage'><img src={back_icon} alt="Back" className='back'/></a>
                    <input input={name} onChange={(e) => {setName(e.target.value); setSubmit(true);}} type="email" placeholder="E-mail" id="userName" name="userName" autoComplete="off"/><br/>
                    <input input={pass} onChange={(e) => {setPass(e.target.value); setSubmit(true);}} type="password" placeholder="**********" id="userPassword" name="userPassword"/><br/>
                    <button>Belépés</button>
                </form>
            </div>
        </div>
    )
}