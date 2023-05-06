import React from 'react';

export default function ErrorMsg (props){
    if(props.active === true){
        return "Válasszon egy karaktert és adjon neki nevet!";
    }else{
        return "";
    }
}