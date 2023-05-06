import noi_karakter from '../images/noi_karakter.png';
import ferfi_karakter from '../images/ferfi_karakter_forditva.png';

export default function Character (props){
    if(props.gender === "?"){
        return <img id='character' src='' alt='karakter'></img>
    }else if(props.gender === "n" && props.moveTo === 0){
        return <img id='character' src={noi_karakter} alt='karakter'></img>
    }else if (props.gender === "n" && props.moveTo === 1){
        return <img id='character' className="moveChapterOneStyle" src={noi_karakter} alt='karakter'></img>
    }else if (props.gender === "n" && props.moveTo === 2){
        return <img id='character' className="moveChapterTwoStyle" src={noi_karakter} alt='karakter'></img>
    }else if (props.gender === "n" && props.moveTo === 3){
        return <img id='character' className="moveChapterThreeStyle" src={noi_karakter} alt='karakter'></img>
    }else if (props.gender === "f" && props.moveTo === 0){
        return <img id='character' src={ferfi_karakter} alt='karakter'></img>
    }else if (props.gender === "f" && props.moveTo === 1){
        return <img id='character' className="moveChapterOneStyle" src={ferfi_karakter} alt='karakter'></img>
    }else if (props.gender === "f" && props.moveTo === 2){
        return <img id='character' className="moveChapterTwoStyle" src={ferfi_karakter} alt='karakter'></img>
    }else if (props.gender === "f" && props.moveTo === 3){
        return <img id='character' className="moveChapterThreeStyle" src={ferfi_karakter} alt='karakter'></img>
    }else{
        return <></>
    }
}
