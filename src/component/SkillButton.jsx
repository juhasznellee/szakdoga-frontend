import React from 'react';

export default function SkillButton (props){
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if(props.button === 1 && props.active === true){
        return <div onClick={e => props.onclick(1)} className='skill-circle' style={{marginTop: randomNumber(1, 36) + '%', marginLeft: randomNumber(1, 22) + '%'}}></div>
    }if(props.button === 2 && props.active === true){
        return <div onClick={e => props.onclick(2)}className='skill-circle' style={{marginTop: randomNumber(11, 36) + '%', marginLeft: randomNumber(80, 97) + '%'}}></div>
    }else{
        return <></>
    }
}