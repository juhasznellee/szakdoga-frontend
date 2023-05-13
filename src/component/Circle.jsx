import React from 'react';

export default function Circle (props){
    if(props.chapter === 1){
        if(props.active === true && props.option === 0){
            return <div id='chapter-one' className='chapter-one-circle-active' onClick={props.onclick}></div>
        }else{
            if(props.option === 0){
                return <div id='chapter-one' className='chapter-one-circle'></div>
            }else if(props.option === 1){
                return <div id='chapter-one' className='chapter-one-work'></div>
            }else if(props.option === 2){
                return <div id='chapter-one' className='chapter-one-uni'></div>
            }else{
                return <></>
            }
        }
    }else if(props.chapter === 2){
        if(props.active === true && props.option === 0){
            return <div id='chapter-two' className='chapter-two-circle-active' onClick={props.onclick}></div>
        }else{
            if(props.option === 0){
                return <div id='chapter-two' className='chapter-two-circle'></div>
            }else if(props.option === 1 && props.isPromoted === true){
                return <div id='chapter-two' className='chapter-two-promotion'></div>
            }else if(props.option === 1 && props.isPromoted === false){
                return <div id='chapter-two' className='chapter-two-failed-promotion'></div>
            }else if(props.option === 2){
                return <div id='chapter-two' className='chapter-two-new-job'></div>
            }else if(props.option === 3){
                return <div id='chapter-two' className='chapter-two-2nd-work-after-uni'></div>
            }else if(props.option === 4){
                return <div id='chapter-two' className='chapter-two-work-after-uni'></div>
            }else{
                return <></>
            }
        }
    }else if(props.chapter === 3){
        if(props.active === true){
            return <div id='chapter-three' className='chapter-three-circle-active' onClick={props.onclick}></div>
        }else{
            if(props.option === 0){
                return <div id='chapter-three' className='chapter-three-circle'></div>
            }if(props.option === 1){
                return <div id='chapter-three' className='chapter-three-valuta'></div>
            }if(props.option === 2){
                return <div id='chapter-three' className='chapter-three-bonds'></div>
            }else{
                return <></>
            }
        }
    }else{
        return <></>
    }
}