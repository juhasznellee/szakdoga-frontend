import React from 'react';

export default function ErrorMsg (props){
    if(props.place === 'home' && props.active === true){
        return "Válasszon egy karaktert és adjon neki nevet!";
    }if(props.place === 'investment' && props.active === true){
        return "Erre nincs elegendő pénzem!";
    }else{
        return "";
    }
}