import React from 'react';

export default function Circle (props){
    if(props.chapter === 1 && props.active === false){
        return <div id='chapter-one' className='chapter-one-circle'></div>
    }else if(props.chapter === 1 && props.active === true){
        return <div id='chapter-one' className='chapter-one-circle-active' onClick={props.onclick}></div>
    }else if(props.chapter === 2 && props.active === false){
        return <div id='chapter-two' className='chapter-two-circle'></div>
    }else if(props.chapter === 2 && props.active === true){
        return <div id='chapter-two' className='chapter-two-circle-active' onClick={props.onclick}></div>
    }else if(props.chapter === 3 && props.active === false){
        return <div id='chapter-three' className='chapter-three-circle'></div>
    }else if(props.chapter === 3 && props.active === true){
        return <div id='chapter-three' className='chapter-three-circle-active' onClick={props.onclick}></div>
    }else{
        return <></>
    }
}