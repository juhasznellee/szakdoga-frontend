import React from 'react';

export default function CustomButton (props){
    if(props.chapter === 0 && props.stage === 1){
        return <button id='to-chapter-one-button' onClick={props.onclick}>Vágjunk bele!</button>
    }else if(props.chapter === 1 && props.stage === 14){
        return <button id='tasks-button' onClick={props.onclick}>Tovább a feladatokra!</button>
    }else if(props.chapter === 1 && props.stage === 15){
        return <button id='after-tasks-button' onClick={props.onclick}>Ellenőrzés!</button>
    }else if(props.chapter === 1 && props.stage === 16){
        return <button id='chapter-continue' onClick={props.onclick}>Még találkozunk!</button>
    }else if(props.chapter === 2 && props.stage === 22){
        return <button id='chapter-continue' onClick={props.onclick}>Döntés megtekintése!</button>
    }else if(props.chapter === 3 && (props.stage === 20 || props.stage === 30 )){
        return <button id='chapter-investment' onClick={props.onclick}>Befejeztem a vásárlást</button>
    }else if(props.chapter === 3 && (props.stage === 21 || props.stage === 31 )){
        return <button id='chapter-continue' onClick={props.onclick}>Még látjuk egymást!</button>
    }else{
        return <button id='chapter-continue' onClick={props.onclick}>Tovább!</button>
    }
}