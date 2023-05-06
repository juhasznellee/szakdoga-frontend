import React from 'react';

export default function PlayerState (props){
    if(props.place === "money"){
        return <>Pénz: {props.value} Ft</>;
    }else if(props.place === "job"){
        return <>Munkakör: {props.value}</>;
    }else if(props.place === "salary"){
        return <>Fizetés: {props.value} Ft</>;
    }else if(props.place === "loan"){
        return <>Tartozás: {props.value} Ft</>;
    }else if(props.place === "skill"){
        return <>Képzettség: {props.value}</>;
    }else if(props.place === "inv-title"){
        return <>Befektetések:</>;
    }else if(props.investment === 1){
        if(props.place === "inv1"){
            return <>{props.value} WEZ</>;
        }else if(props.place === "inv2"){
            return <>{props.value} KNO</>;
        }else if(props.place === "inv3"){
            return <>{props.value} LIS</>;
        }else if(props.place === "inv4"){
            return <>{props.value} ADP</>;
        }else{
            return <></>;
        }
    }else if(props.investment === 2){
        if(props.place === "inv1"){
            return <>MÁ 1: {props.value} Ft</>;
        }else if(props.place === "inv2"){
            return <>MÁ 2: {props.value} Ft</>;
        }else if(props.place === "inv3"){
            return <>MÁ Plusz: {props.value} Ft</>;
        }else if(props.place === "inv4"){
            return <>MÁ Prémium: {props.value} Ft</>;
        }else{
            return <></>;
        }
    }else{
        return <></>;
    }
}