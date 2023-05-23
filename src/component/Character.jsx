import youngWoman from '../images/young_woman.png';
import youngMan from '../images/young_man.png';
import olderWoman from '../images/older_woman.png';
import olderMan from '../images/older_man.png';
import oldWoman from '../images/old_woman.png';
import oldMan from '../images/old_man.png';


export default function Character(props) {
    if (props.gender === "?") {
        return <img id='character' className="begin-style" src='' alt='karakter'></img>
    } else if (props.moveTo === 0) {
        if (props.gender === "n") {
            return <img id='character' className="begin-style" src={youngWoman} alt='karakter'></img>
        } else {
            return <img id='character' className="begin-style" src={youngMan} alt='karakter'></img>
        }
    } else if (props.moveTo === 1) {
        if (props.gender === "n") {
            return <img id='character' className="move-chapter-one-style" src={youngWoman} alt='karakter'></img>
        } else {
            return <img id='character' className="move-chapter-one-style" src={youngMan} alt='karakter'></img>
        }
    } else if (props.moveTo === 2) {
        if (props.gender === "n") {
            if (props.stopped === false) {
                return <img id='character' className="move-chapter-two-style" src={youngWoman} alt='karakter'></img>
            } else {
                return <img id='character' className="chapter-two-style" src={olderWoman} alt='karakter'></img>
            }
        } else {
            if (props.stopped === false) {
                return <img id='character' className="move-chapter-two-style" src={youngMan} alt='karakter'></img>
            } else {
                return <img id='character' className="chapter-two-style" src={olderMan} alt='karakter'></img>
            }
        }
    } else if (props.moveTo === 3) {
        if (props.gender === "n") {
            if (props.stopped === false) {
                return <img id='character' className="move-chapter-three-style" src={olderWoman} alt='karakter'></img>
            } else {
                return <img id='character' className="chapter-three-style" src={oldWoman} alt='karakter'></img>
            }
        } else {
            if (props.stopped === false) {
                return <img id='character' className="move-chapter-three-style" src={olderMan} alt='karakter'></img>
            } else {
                return <img id='character' className="chapter-three-style" src={oldMan} alt='karakter'></img>
            }
        }
    } else {
        if (props.gender === "n") {
            return <img id='character' className="move-chapter-end-style" src={oldWoman} alt='karakter'></img>
        } else {
            return <img id='character' className="move-chapter-end-style" src={oldMan} alt='karakter'></img>
        }
    }
}
