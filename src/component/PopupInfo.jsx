import React from 'react';
import { Popup } from 'semantic-ui-react'

export default function PopupInfo (props){
    if(props.place === "hitel"){
        return <>
            <Popup trigger={<span className='popup-info'>Diákhitel 1</span>} wide>
                <div className='description'>
                    Tudnivalók a hitelről:
                    <ul>
                        <li>Félévek száma: 10 félév - Egy félév 5 hónapot jelent.</li>
                        <li>Havonta felvett összeg: 80 000 Ft - Így az összesen felvett hitel: 4 000 000 Ft.</li>
                        <li>Futamidő: 10 év - Ennyi év alatt kell visszafizetni az összeget.</li>
                        <li>Kamat: 4.99% - Havonta ennyi %-ot nő a visszafizetendő összeg.</li>
                        <li>Türelmi idő: 5 év (egyetem után) - Ennyi idő elteltével kell elkezdened törleszteni.</li>
                    </ul>
                    Havonta 48 857 Ft-ot kell majd visszafizetni (törlesztőrészlet).
                </div>
            </Popup>
        </>
    }else if(props.place === "brutto"){
        return <>
            <Popup trigger={<span className='popup-info'>bruttó</span>} wide>
                <div className='description'>
                    Az az összeg, amit a munkáltató fizet a munkavállalónak, mielőtt bármilyen adót és járulékot levonnának.
                </div>
            </Popup>
        </>
    }else if(props.place === "netto"){
        return <>
            <Popup trigger={<span className='popup-info'>nettó</span>} wide>
                <div className='description'>
                    Az az összeg, amit a munkavállaló ténylegesen kézhez kap minden adó és járulékfizetés után.<br/><br/>Levonásra kerül a:
                    <ul>
                        <li>személyi jövedelem adó (15%),</li>
                        <li>társadalombiztosítási járulék (18.5%)</li>
                    </ul>
                </div>
            </Popup>
        </>
    }else if(props.place === "torleszt"){
        return <>
            <Popup trigger={<span className='popup-info'>törleszt</span>} wide>
                <div className='description'>
                    Az adósság visszafizetése több (általában havi) részletben.
                </div>
            </Popup>
        </>
    }else if(props.place === "torleszto"){
        return <>
            <Popup trigger={<span className='popup-info'>törlesztőrészlet</span>} wide>
                <div className='description'>
                    A hitelező által kért összeg, amit a hitelfelvevőnek kell megfizetnie havi esedékességgel. Tehát a felvett hitel után fizetendő kamat és tőkerész együttese.
                </div>
            </Popup>
        </>
    }else if(props.place === "felmondasi"){
        return <>
            <Popup trigger={<span className='popup-info'>felmondási idő</span>} wide>
                <div className='description'>
                    A munkavállaló/munkáltató felmondási szándékát megelőzően a megbeszélt időtartammal (általában 30 nap) köteles bejelenteni. Ez leteltével lesz a felmondás végleges.
                </div>
            </Popup>
        </>
    }else if(props.place === "befektet"){
        return <>
            <Popup trigger={<span className='popup-info'>befektet</span>} wide>
                <div className='description'>
                    Olyan folyamat, melynek során a tőkével/megtakarítással rendelkező személy vásárol különböző befektetési eszközöket abból a célből, hogy a befektetett tőke értékét növelje.
                </div>
            </Popup>
        </>
    }else if(props.place === "valuta"){
        return <>
            <Popup trigger={<span className='popup-info'>valuta</span>} wide>
                <div className='description'>
                    Valamely más ország törvényes fizetőeszközének megjelenése fizikai formában egy másik ország fizetési forgalmában.
                </div>
            </Popup>
        </>
    }else if(props.place === "valutaa"){
        return <>
            <Popup trigger={<span className='popup-info'>valutá</span>} wide>
                <div className='description'>
                    Valamely más ország törvényes fizetőeszközének megjelenése fizikai formában egy másik ország fizetési forgalmában.
                </div>
            </Popup>
        </>
    }else if(props.place === "kotveny"){
        return <>
            <Popup trigger={<span className='popup-info'>kötvény</span>} wide>
                <div className='description'>
                    Hitelviszonyt megtestesítő értékpapír.<br/>A kötvény kibocsátója (az adós - jelen esetben az állam) arra kötelezi magát, hogy a kötvényben megjelelölt pénzösszeget, annak kamatát és egyéb jutalékait a mindenkori tulajdonosnak (hitelezőnek) a megjelölt időpontban és módon visszafizeti.
                </div>
            </Popup>
        </>
    }else if(props.place === "arfolyam"){
        return <>
            <Popup trigger={<span className='popup-info'>árfolyam</span>} wide>
                <div className='description'>
                    Pénznemek közötti átváltásra szolgáló mérték.
                </div>
            </Popup>
        </>
    }else if(props.place === "Arfolyam"){
        return <>
            <Popup trigger={<span className='popup-info'>Árfolyam</span>} wide>
                <div className='description'>
                    Pénznemek közötti átváltásra szolgáló mérték.
                </div>
            </Popup>
        </>
    }else if(props.place === "futamido"){
        return <>
            <Popup trigger={<span className='popup-info'>futamidő</span>} wide>
                <div className='description'>
                    A hitelszerződésben foglalt időtartam, mely alatt kötelesek visszafizetni az adott hitelt annak minden egyéb jutalékával és kamatával együtt.
                </div>
            </Popup>
        </>
    }
    else if(props.place === "Futamido"){
        return <>
            <Popup trigger={<span className='popup-info'>Futamidő</span>} wide>
                <div className='description'>
                    A hitelszerződésben foglalt időtartam, mely alatt kötelesek visszafizetni az adott hitelt annak minden egyéb jutalékával és kamatával együtt.
                </div>
            </Popup>
        </>
    }else if(props.place === "Fixkamat"){
        return <>
            <Popup trigger={<span className='popup-info'>Fix kamatozású</span>} wide>
                <div className='description'>
                    A hitel teljes futamideje alatt változatlan a kamatláb mértéke.
                </div>
            </Popup>
        </>
    }else if(props.place === "kamat"){
        return <>
            <Popup trigger={<span className='popup-info'>kamat</span>} wide>
                <div className='description'>
                    A kamat mindig egy pénzösszeg, amit a befektetésünk névértéke (futamidő végén kamatok nélküli visszafizetendő) után fizet meg az, akinek a tőkénket kölcsönadtuk. A névértékre vetített kamat összege %-os formában kifejezve a kamatláb (kamatként is hivatkoznak rá).
                </div>
            </Popup>
        </>
    }else if(props.place === "Kamat"){
        return <>
            <Popup trigger={<span className='popup-info'>Kamat</span>} wide>
                <div className='description'>
                    A kamat mindig egy pénzösszeg, amit a befektetésünk névértéke (futamidő végén kamatok nélküli visszafizetendő) után fizet meg az, akinek a tőkénket kölcsönadtuk. A névértékre vetített kamat összege %-os formában kifejezve a kamatláb (kamatként is hivatkoznak rá).
                </div>
            </Popup>
        </>
    }else if(props.place === "piac"){
        return <>
            <Popup trigger={<span className='popup-info'>pénzügyi piac</span>} wide>
                <div className='description'>
                    Úgynevezett piactér, ahol a pénzügyi instrumentumokat nemzetközi és globális szinten is kereskedik. A kereskedők ezeket az instrumentumokat megveszik és eladják, hogy potenciális nyereségre tehessenek szert, miközben a kockázatokat próbálják korlátozni.
                </div>
            </Popup>
        </>
    }else if(props.place === "megtakaritas"){
        return <>
            <Popup trigger={<span className='popup-info'>megtakarítás</span>} wide>
                <div className='description'>
                    Az egyén (vagy a háztartás) nettó pénzeszköz-többletét jelenti, miután minden kiadást és kötelezettséget kifizetett.
                </div>
            </Popup>
        </>
    }else if(props.place === "veteli"){
        return <>
            <Popup trigger={<span className='popup-info'>Vételi árfolyam</span>} wide>
                <div className='description'>
                    A valuta azon árfolyama, amin a pénzváltó hajlandó tőlünk megvásárolni a valutát, amelyért cserébe az árfolyamnak megfelelő összegű forintot ad. Minél nagyobb az értéke, annál kedvezőbb számunkra.
                </div>
            </Popup>
        </>
    }else if(props.place === "eladasi"){
        return <>
            <Popup trigger={<span className='popup-info'>Eladási árfolyam</span>} wide>
                <div className='description'>
                    A valuta azon árfolyama, amin a pénzváltó (vagy bank) számunkra valutát ad el. Minél kisebb ez az árfolyam, annál jobban járunk.
                </div>
            </Popup>
        </>
    }else{
        return <></>;
    }
}