import React from 'react';

export default function PlayerState (props){
    if(props.place === "money"){
        return <span className={props.class}>Pénz: {props.value} Ft</span>;
    }else if(props.place === "job"){
        return <span className={props.class}>Munkakör: {props.value}</span>;
    }else if(props.place === "salary"){
        return <span className={props.class}>Fizetés: {props.value} Ft</span>;
    }else if(props.place === "loan"){
        return <span className={props.class}>Tartozás: {props.value} Ft</span>;
    }else if(props.place === "skill"){
        return <span className={props.class}>Képzettség: {props.value}</span>;
    }else if(props.place === "inv-title"){
        return <span className={props.class}>Befektetések:</span>;
    }else if(props.investment === 1){
        if(props.place === "inv1"){
            return <span className={props.class}>{props.value} WEZ</span>;
        }else if(props.place === "inv2"){
            return <span className={props.class}>{props.value} KNO</span>;
        }else if(props.place === "inv3"){
            return <span className={props.class}>{props.value} LIS</span>;
        }else if(props.place === "inv4"){
            return <span className={props.class}>{props.value} ADP</span>;
        }else{
            return <></>;
        }
    }else if(props.investment === 2){
        if(props.place === "inv1"){
            return <span className={props.class}>MÁ 1: {props.value} Ft</span>;
        }else if(props.place === "inv2"){
            return <span className={props.class}>MÁ 2: {props.value} Ft</span>;
        }else if(props.place === "inv3"){
            return <span className={props.class}>MÁ Plusz: {props.value} Ft</span>;
        }else if(props.place === "inv4"){
            return <span className={props.class}>MÁ Prémium: {props.value} Ft</span>;
        }else{
            return <></>;
        }
    }else{
        return <></>;
    }
}