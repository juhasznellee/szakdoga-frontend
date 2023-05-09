import WheelComponent from 'react-wheel-of-prizes';
import PopupInfo from '../component/PopupInfo.jsx';
import React, { useState } from 'react';

export default function InfoTable(props) {
    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [amount3, setAmount3] = useState(0);
    const [amount4, setAmount4] = useState(0);

    const handleChange1 = (event) => {
        setAmount1(event.target.value);
    };
    const handleChange2 = (event) => {
        setAmount2(event.target.value);
    };
    const handleChange3 = (event) => {
        setAmount3(event.target.value);
    };
    const handleChange4 = (event) => {
        setAmount4(event.target.value);
    };
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    if(props.chapter === 0 && props.stage === 1){
        return (
            <>
                Szia!<br/>{props.playername} vagyok, nagyon örülök hogy megismerhetlek!<br/>Idén érettségiztem le, és a szüleim már kérdezősködnek, hogy mivel szeretnék foglalkozni a jövőben. Nagy bajban vagyok, mert ötletem sincs, hogy mit kezdjek jelenleg az életemmel vagy mitévő legyek.<br/>Nagy szükségem lenne a segítségedre és a tudásodra. Úgy hallottam nem én vagyok az első aki hozzád fordult.<br/>Tudnál nekem segíteni?
            </>
        );
    }else if(props.chapter === 1){
        if(props.stage === 2){
            return(
                <div className="table-narration-shorter1">
                    <i className="narration">Az aktív kérdőjeles körökre kattintva láthatod az adott pont döntési lehetőségeit. Az általad választott gombot megnyomva véglegesítheted a döntést, hogy mi szerint cselekedjen {props.name}.<br/>A jobb felső sarokban láthatod {props.name} aktuális pénzét, munkáját, havi <PopupInfo place="brutto"/> fizetését és a képzettségi szintjét. Lehetőségünk van képzések elvégzésére, amit odafigyeléssel és gyorsasággal szerezhetünk meg.</i>
                </div>
            );
        }else if(props.stage === 3){
            return(
                <div className="chapter-one-table">
                    <p className='box0'>Régóta töröm a fejem ezen a döntésen, hogy tovább tanuljak-e vagy inkább elmenjek dolgozni, de egyenlőre nem jutottam még semmire.</p>
                    <div className='box1-ch1'>Te mit választanál?</div>
                    <button className='box2-ch1' onClick={e => props.onclick1(props.player)}>Dolgozni megyek</button>
                    <button className='box3-ch1' onClick={e => props.onclick2(props.player)}>Egyetemre megyek</button>
                </div>
            );
        }else if(props.stage === 14){
            return(
                <div>
                    Ahogy tanácsoltad, elkezdtem munkák után érdeklődni, és rengeteg helyre be is adtam az önéletrajzomat. Hívtak egy cégtől, hogy alkalmasnak találtak az állásra amire jelentkeztem. {props.jobname} lennék és havi <PopupInfo place="brutto"/> {props.salary} Ft-ot kaphatnék. Tetszett az ajánlatuk, így elfogadtam az állásajánlatot.<br/>Felajánlották, hogy ha másnapra hibátlanra megoldom a kiadott feladatokat, akkor <PopupInfo place="brutto"/> +50 000 Ft alapfizetéssel indulhatok. Már megoldottam a feladatokat, de nagyon bizonytalan vagyok a végeredményekben.<br/>Tudom kicsit későn szólok, de kérlek ellenőrizd le nekem a válaszaimat, és hibás eredmény esetén javítsd ki.
                </div>
            );
        }else if(props.stage === 16 && props.answer === 5){
            return ( 
                <div>
                    Kicsit későn de megkaptam az emailt benne az eredményekkel. Nagyon köszönöm, hogy kijavítottad a feladatok megoldásait, hála neked hibátlan lett és megkapom a magasabb alapfizetést. Holnap elintézzük a papírmunkát, hogy minél hamarabb tudjak kezdeni. Izgatottan várom milyen lesz a munka, remélem könnyen belejövök és hamar be tudok illeszkedni a csapatba.<br/>Most viszont megyek, találkozunk 5 év múlva!
                </div>
            );
        }else if(props.stage === 16 && props.answer < 5){
            return ( 
                <div>
                    Kicsit későn de megkaptam az emailt benne az eredményekkel. Nagyon hálás vagyok a segítségedért, de sajnos nem lett hibátlan a feladat, {props.answer} pontot sikerült elérni az 5-ből. Holnap elintézzük a papírmunkát, hogy minél hamarabb tudjak kezdeni. Izgatottan várom milyen lesz a munka, remélem könnyen belejövök és hamar be tudok illeszkedni a csapatba.<br/>Most viszont megyek, találkozunk 5 év múlva!
                </div>
            );
        }else if(props.stage === 24){
            return ( 
                <div>
                     Ahogy tanácsoltad, elkezdtem utána nézni az egyetemeknek és az ott lévő képzéseknek. A városban 3 egyetem van, ahol indulni fog olyan szak ami érdekel is engem, így ezekre beadtam a jelentkezésem:
                    <ul>
                        <li>A város legjobb egyeteme, mindenki ide szeretne bekerülni: MEW Egyetem</li>
                        <li>Egészen átlagos egyetem, semmi kiemelkedő nincs benne: VRF Egyetem</li>
                        <li>Legkevésbé ismert egyetem, alacsony színvonal minimális elvárásokkal: KEG Egyetem</li>
                    </ul>
                    Most már csak várnom kell, amíg megérkeznek az eredmmények a felvételivel kapcsolatban.
                </div>
            );
        }else if(props.stage === 25){
            const segments = [
                'VRF Egyetem',
                'KEG Egyetem',
                'MEW Egyetem',
                'KEG Egyetem',
                'VRF Egyetem',
                'KEG Egyetem'
            ];
            const segColors = [
                '#F1C40F',
                '#CB4335',
                '#2ECC71',
                '#CB4335',
                '#F1C40F',
                '#CB4335'
            ];
            const tempfunction = (winner) => {
                setTimeout(function() {
                    if(winner === 'MEW Egyetem'){
                        props.onclick(3);
                    }else if(winner === 'VRF Egyetem'){
                        props.onclick(2);
                    }else{
                        props.onclick(1);
                    }
                }, 3000);
            }
            return(
                <div className='wheelspin'>
                    <span className='title'>A felvételi eredménye</span>
                    <WheelComponent
                        segments={segments}
                        segColors={segColors}
                        onFinished={(winner) =>  tempfunction(winner)}
                        primaryColor='rgba(239, 239, 239, 0)'
                        contrastColor='black'
                        buttonText=''
                        isOnlyOnce={true}
                        size={180}
                        upDuration={randomNumber(50, 100)}
                        downDuration={randomNumber(1500, 2000)}
                        fontFamily='Merienda'
                    />
                </div>
            );
        }else if(props.stage === 26 && props.level === 3){
            return(
                <div>
                    Tudom későre jár, de megjöttek az eredmények a felvételivel kapcsolatban és muszáj vagyok elmesélni. Az első helyen jelölt egyetemre vettek fel, a MEW Egyetemre. Sokat kell majd tanulnom, hogy tudjam tartani a lépést a többiekkel és eleget tudjak tenni az elvárásoknak.<br/>Egyetemi éveimre fel kell vennem a <PopupInfo place="hitel"/>-et, mert a szüleim sajnos nem engedhetik meg maguknak, hogy anyagilag támogassanak. Kivételesen van lehetőségem, hogy egybe megkapjam az összeget (tehát 4 000 000 Ft) majd az összeget egyetem után kezdjem visszafizetni. Terveim szerint minden hónapban maximum 100 000 Ft-ot költhetek, és ami marad azt félre tudom tenni.<br/>Most viszont megyek, felkereslek 5 év múlva, miután elvégeztem az egyetemet.
                </div>
            );
        }else if(props.stage === 26 && props.level === 2){
            return(
                <div>
                    Tudom későre jár, de megjöttek az eredmények a felvételivel kapcsolatban és muszáj vagyok elmesélni. A második helyen jelölt egyetemre vettek fel, a VRF Egyetemre. Sajnálom, hogy lecsúsztam az elsőről, de ez is egy nehéz egyetemnek ígérkezik. Biztos sokat kell majd tanulnom, de legalább szórakozni és ismerkedni is lesz időm.<br/>Egyetemi éveimre fel kell vennem a <PopupInfo place="hitel"/>-et, mert a szüleim sajnos nem engedhetik meg maguknak, hogy anyagilag támogassanak. Kivételesen van lehetőségem, hogy egybe megkapjam az összeget (tehát 4 000 000 Ft) majd az összeget egyetem után kezdjem visszafizetni. Terveim szerint minden hónapban maximum 100 000 Ft-ot költhetek, és ami marad azt félre tudom tenni.<br/>Most viszont megyek, felkereslek 5 év múlva, miután elvégeztem az egyetemet.
                </div>
            );
        }else if(props.stage === 26 && props.level === 1){
            return(
                <div>
                    Tudom későre jár, de megjöttek az eredmények a felvételivel kapcsolatban és muszáj vagyok elmesélni. A harmadik helyen jelölt egyetemre vettek fel, a KEG Egyetemre. Örülök, hogy felvettek, legalább itt nem kell halálra tanulnom magam és a követelmények sem tűnnek vészesnek. Akár el tudok menni többször is szórakozni, programokat csinálni és kapcsolatokat építeni.<br/>Egyetemi éveimre fel kell vennem a <PopupInfo place="hitel"/>-et, mert a szüleim sajnos nem engedhetik meg maguknak, hogy anyagilag támogassanak. Kivételesen van lehetőségem, hogy egybe megkapjam az összeget (tehát 4 000 000 Ft) majd az összeget egyetem után kezdjem visszafizetni. Terveim szerint minden hónapban maximum 100 000 Ft-ot költhetek, és ami marad azt félre tudom tenni.<br/>Most viszont megyek, felkereslek 5 év múlva, miután elvégeztem az egyetemet.
                </div>
            );
        }else{
            return <></>;
        }
    }else if(props.chapter === 2){
        if(props.stage === 10){
            return (
                <div className='table-narration'>
                    Az első részben elért eredmények:
                    <ul>
                        <li>Mivel {props.name} csak érettségi bizonyítvánnyal rendelkezik, ezért nehezére esett jólfizető munkát találnia. Sok keresgélés után és nagy szerencsével talált magának egy megfelelő munkát amit el is tudott vállalni. Így most <span className="lower">{props.jobname}ként</span> dolgozik.</li>
                        <li>A <PopupInfo place="brutto"/> fizetése havi {props.salary} Ft, ami <PopupInfo place="netto"/> {props.salary * 0.665} Ft-ot jelent.</li>
                        <li>Ebben az időszakban összesen {props.moneyGet} Ft-ot sikerült keresnie.</li>
                        <li>És ugyan ebben az időszakban {props.moneySpent} Ft-ot költött el.</li>
                    </ul>
                    <i className="narration">Kattints az aktív körre a tovább lépéshez!</i>
                </div>
            );
        }else if(props.stage === 11){
            return(
                <div className="chapter-two-table">
                    <p className='box0'>Szia!<br/>Jó újra látni téged, régen beszéltünk!<br/>Mint tudod, a jelenlegi munkahelyemen már 5 éve dolgozok, és még semmilyen fizetés emelést nem kaptam, de még csak nem is volt róla szó. Nem tudom, hogy szóvá tegyem-e a főnökömnek hátha egy kis eséllyel kapok fizetés emelést, vagy inkább keressek egy másik munkahelyet.</p>
                    <div className='box1-ch2'>Te hogy döntenél?</div>
                    <button className='box2-ch2' onClick={e => props.onclick1(props.player)}>Megpróbálok előlépni</button>
                    <button className='box3-ch2' onClick={e => props.onclick2(props.player)}>Új munkát keresek</button>
                </div>
            );
        }else if(props.stage === 12){
            const segments = [
                'Előléptetve',
                'Elutasítva',
                'Elutasítva',
                'Elutasítva',
                'Előléptetve',
                'Előléptetve',
                'Elutasítva',
                'Előléptetve',
                'Elutasítva'
            ];
            const segColors = [
                '#2ECC71',
                '#CB4335',
                '#CB4335',
                '#CB4335',
                '#2ECC71',
                '#2ECC71',
                '#CB4335',
                '#2ECC71',
                '#CB4335'
            ];
            const tempfunction = (winner) => {
                setTimeout(function() {
                    if(winner === 'Előléptetve'){
                        props.onclick(1);
                    }else{
                        props.onclick(0);
                    }
                }, 3000);
            }
            return(
                <div className='wheelspin'>
                    <span className='title'>Előléptetés eredménye</span>
                    <WheelComponent
                        segments={segments}
                        segColors={segColors}
                        onFinished={(winner) =>  tempfunction(winner)}
                        primaryColor='rgba(239, 239, 239, 0)'
                        contrastColor='black'
                        buttonText=''
                        isOnlyOnce={true}
                        size={180}
                        upDuration={randomNumber(50, 100)}
                        downDuration={randomNumber(1500, 2000)}
                        fontFamily='Merienda'
                    />
                </div>
            );
        }else if(props.stage === 13){
            return (
                <div>
                    Délután meglátogattam a főnökömet és beszéltem vele a jelenlegi fizetésemről, és az előléptetésemről. Elmesélte, hogy már a felső körökben is szóbajött ez a téma, és pont a holnapi megbeszélésen szerette volna közölni velem a jó hírt, de megelőztem ezzel.<br/>Elmondásai alapján az új fizetésem <PopupInfo place="brutto"/> {props.salary} Ft lesz, ami <PopupInfo place="netto"/> {props.salary * 0.665} Ft-nak felel meg.<br/>Most viszont mennem kell mert későre jár. 5 év elteltével újra kereslek és beszélünk!
                </div>
            );
        }else if(props.stage === 14){
            return (
                <div>
                    Délután meglátogattam a főnökömet és beszéltem vele a jelenlegi fizetésemről, és az előléptetésemről. Elmondta, hogy jobban bele kéne húznom ha előrébb szeretnék jutni a ranglétrán. Magamnak köszönhetem, hogy még nem tartok azon a szinten, és jobban belegondolva igaza is van, több energiát kell belefektetnem a munkámba.<br/>Elég szomorú vagyok a hír hallatán, mert azt hittem ennyi idő után megérdemelném az előléptetést, de úgy látszik nem elég csak az időnek telnie, le is kell tenni valamit az asztalra..<br/>Most viszont mennem kell mert későre jár. 5 év elteltével újra kereslek és beszélünk!
                </div>
            );
        }else if(props.stage === 22){
            return (
                <div>
                    A bíztatásodra elkezdtem új munkák íránt érdeklődni. A keresgélés során megtaláltam azt a munkát amiről mindig is álmodtam, így egyből be is adtam az önéletrajzomat. Az interjúk alatt nagyon izgultam, de próbáltam a legtöbbet kihozni magamból. Most már csak várnom kell az eredményre, hogy miként dönt a cég ügyvezetője.<br/>Mindeközben felmondtam a jelenlegi munkahelyemen, mert mire lejár a 30 napos <PopupInfo place="felmondasi"/>m, addigra biztos vagyok benne, hogy találni fogok egy új munkát, ha ez nem is jönne össze.
                </div>
            );
        }else if(props.stage === 23){
            const segments = [
                'Elutasítva',
                'Elutasítva',
                'Elutasítva',
                'Felvéve',
                'Felvéve',
                'Elutasítva',
                'Elutasítva'
            ];
            const segColors = [
                '#CB4335',
                '#CB4335',
                '#CB4335',
                '#2ECC71',
                '#2ECC71',
                '#CB4335',
                '#CB4335'
            ];
            const tempfunction = (winner) => {
                setTimeout(function() {
                    if(winner === 'Felvéve'){
                        props.onclick(1);
                    }else{
                        props.onclick(0);
                    }
                }, 3000);
            }
            return(
                <div className='wheelspin'>
                    <span className='title'>Az interjú eredménye</span>
                    <WheelComponent
                        segments={segments}
                        segColors={segColors}
                        onFinished={(winner) =>  tempfunction(winner)}
                        primaryColor='rgba(239, 239, 239, 0)'
                        contrastColor='black'
                        buttonText=''
                        isOnlyOnce={true}
                        size={180}
                        upDuration={randomNumber(50, 100)}
                        downDuration={randomNumber(1500, 2000)}
                        fontFamily='Merienda'
                    />
                </div>
            );
        }else if(props.stage === 24){
            return (
                <div>
                    Értesítettek az interjúm eredményéről, és úgy néz ki megkapom az állást. A <PopupInfo place="felmondasi"/>m leteltével, ami a hó végén letelik, <span className="lower">{props.jobname}ként</span> fogok dolgozni. Nagyon izgatott vagyok, mert mindig is tetszett ez a munkakör, és végre sikerült elérnem.<br/>A fizetésről nem is beszélve, <PopupInfo place="brutto"/> {props.salary} Ft-ot ajánlottak havonta, ami <PopupInfo place="netto"/> {props.salary * 0.665} Ft.
                </div>
            );
        }else if(props.stage === 25){
            return (
                <div>
                    Egy ideje már megérkezett az interjúm eredménye, és sajnos nem lett enyém az állás, találhattak jobbat nálam. De egy percig sem szomorkodtam, mert más helyekre is beadtam az önéletrajzomat. Kis idő elteltével találtam egy állást amit elfogadtam, így a <PopupInfo place="felmondasi"/>m leteltével, ami a hó végén letelik, <span className="lower">{props.jobname}ként</span> fogok dolgozni.<br/>A cég <PopupInfo place="brutto"/> {props.salary} Ft-ot ajánlott havonta, ami <PopupInfo place="netto"/> {props.salary * 0.665} Ft.
                </div>
            );
        }else if(props.stage === 30){
            let uniLevel = "";
            if(props.level === 3){
                uniLevel = "MEW";
            }else if(props.level === 2){
                uniLevel = "VRF";
            }else{
                uniLevel = "KEG";
            }
            return (
                <div className='table-narration'>
                    Az első részben elért eredmények:
                    <ul>
                        <li>{props.name} sikeresen elvégezte a {uniLevel} Egyetemet, kemény és kitartó munkával megszerezte a diplomáját.</li>
                        <li>A <PopupInfo place="hitel"/> miatt {props.moneyGet} Ft-ot kapott az egyetemi éveire, amit vissza kell fizetnie miután munkát talát magának.</li>
                        <li>Ez alatt az idő alatt összesen {props.moneySpent} Ft-ot költött.</li>
                    </ul>
                    <i className="narration">Kattints az aktív körre a tovább lépéshez!</i>
                </div>
            );
        }else if(props.stage === 31){
            return (
                <div>
                    Szia!<br/>Jó újra látni téged, régen beszéltünk!<br/>Sok minden történt amíg nem találkoztunk, nem is tudom hol kezdjem. Mint tudod megszereztem a diplomámat, és úgy gondolom ideje lenne elkezdenem munkát keresni. Sürget az idő, mert a <PopupInfo place="hitel"/> <PopupInfo place="torleszt"/>ése is a nyakamon van. Úgy hallottam friss diplomásként nehéz lesz munkát találni, akár több interjún is át kell majd essek. De biztos fogok találni egy nekem tetsző munkát rendes fizetéssel.<br/>Amint van valami fejlemény, keresni foglak.
                </div>
            );
        }else if(props.stage === 32){
            return(
                <div className="chapter-two-table">
                    <p className='box0'>Mindenképpen <span className="lower">{props.jobname}</span>ként szeretnék dolgozni a végzettségemből kifolyólag. Ajánlottak egy munkát, ahol havi {props.salary} <PopupInfo place="brutto"/> Ft-ot kapnék. Adtak egy napot, hogy átgondoljam a dolgot és döntsek, hogy elfogadom-e az állást vagy keresek másikat ahol lehet jobb fizetést is kaphatok.</p>
                    <div className='box1-ch2'>Te hogy döntenél?</div>
                    <button className='box2-ch2' onClick={e => props.onclick1(props.player)}>Elfogadom az állást</button>
                    <button className='box3-ch2' onClick={e => props.onclick2(props.player)}>Másik állást keresek</button>
                </div>
            );
        }else if(props.stage === 33 && props.oldsalary > props.salary){
            return(
                <div>
                    Megfogadtam a tanácsodat, és nem fogadtam el egyből az első munkát, hanem tovább keresgéltem. 1 évembe telt, de végül sikerült találnom egy másik munkát, és mivel már nem szeretném ennél is tovább húzni a dolgokat, ezért egyből el is fogadtam. Havonta <PopupInfo place="brutto"/> {props.salary} Ft-ot kapok majd, ami sajnos kevesebb mint amit az előző munkánál kaptam volna, de így sem szomorkodom.<br/>Felajánlották, hogy ha másnapra hibátlanra megoldom a kiadott feladatokat, akkor <PopupInfo place="brutto"/> +50 000 Ft alapfizetéssel indulhatok. Már megoldottam a feladatokat, de nagyon bizonytalan vagyok a végeredményekben.<br/>Tudom kicsit  későn szólok, de kérlek ellenőrizd le nekem a válaszaimat, és hibás eredmény esetén javítsd ki.
                </div>
            );
        }else if(props.stage === 33 && props.oldsalary === props.salary){
            return(
                <div>
                    Megfogadtam a tanácsodat, és nem fogadtam el az első munkát, hanem tovább keresgéltem. 1 évembe telt, de végül sikerült találnom egy másik munkát, és mivel már nem szeretném ennél is tovább húzni a dolgokat, ezért egyből el is fogadtam. Havonta <PopupInfo place="brutto"/> {props.salary} Ft-ot kapok majd, ami pontosan ugyan annyi mint amit előző munkánál kaptam volna.<br/>Felajánlották, hogy ha másnapra hibátlanra megoldom a kiadott feladatokat, akkor <PopupInfo place="brutto"/> +50 000 Ft alapfizetéssel indulhatok. Már megoldottam a feladatokat, de nagyon bizonytalan vagyok a végeredményekben.<br/>Tudom kicsit későn szólok, de kérlek ellenőrizd le nekem a válaszaimat, és hibás eredmény esetén javítsd ki.
                </div>
            );
        }else if(props.stage === 33 && props.oldsalary < props.salary){
            return(
                <div>
                    Megfogadtam a tanácsodat, és nem fogadtam el az első munkát, hanem tovább keresgéltem. 1 évembe telt, de végül sikerült találnom egy másik munkát, és mivel már nem szeretném ennél is tovább húzni a dolgokat, ezért egyből el is fogadtam. Havonta <PopupInfo place="brutto"/> {props.salary} Ft-ot kapok majd, ami több mint amit az előző munkánál ajánlottak, szóval jobban is jártam hála neked.<br/>Felajánlották, hogy ha másnapra hibátlanra megoldom a kiadott feladatokat, akkor <PopupInfo place="brutto"/> +50 000 Ft alapfizetéssel indulhatok. Már megoldottam a feladatokat, de nagyon bizonytalan vagyok a végeredményekben.<br/>Tudom kicsit későn szólok, de kérlek ellenőrizd le nekem a válaszaimat, és hibás eredmény esetén javítsd ki.
                </div>
            );
        }else if(props.stage === 34){
            return(
                <div>
                    Megfogadtam a tanácsodat, már másnap beszéltem is a cég ügyvezetőjével, hogy elfogadom az állásajánlatot, nem húzom tovább az időt.<br/>Felajánlották, hogy ha másnapra hibátlanra megoldom a kiadott feladatokat, akkor <PopupInfo place="brutto"/> +50 000 Ft alapfizetéssel indulhatok. Már megoldottam a feladatokat, de nagyon bizonytalan vagyok a végeredményekben.<br/>Tudom kicsit már későn szólok, de kérlek ellenőrizd le nekem a válaszaimat, és hibás eredmény esetén javítsd ki.
                </div>
            );
        }else if((props.stage === 37 || props.stage === 38) && props.answer === 5){
            return ( 
                <div>
                    Kicsit későn de megkaptam az emailt benne az eredményekkel. Nagyon köszönöm, hogy kijavítottad a feladatok megoldásait, hála neked hibátlan lett és megkapom a magasabb alapfizetést. Holnap elintézzük a papírmunkát, hogy minél hamarabb tudjak kezdeni. Izgatottan várom milyen lesz a munka, remélem könnyen belejövök és hamar be tudok illeszkedni a csapatba.<br/>Most viszont megyek, találkozunk 5 év múlva!
                </div>
            );
        }else if((props.stage === 37 || props.stage === 38) && props.answer < 5){
            return ( 
                <div>
                    Kicsit későn de megkaptam az emailt benne az eredményekkel. Nagyon hálás vagyok a segítségedért, de sajnos nem lett hibátlan a feladat, {props.answer} pontot sikerült elérni az 5-ből. Holnap elintézzük a papírmunkát, hogy minél hamarabb tudjak kezdeni. Izgatottan várom milyen lesz a munka, remélem könnyen belejövök és hamar be tudok illeszkedni a csapatba.<br/>Most viszont megyek, találkozunk 5 év múlva!
                </div>
            );
        }else{
            return <></>;
        }
    }else if(props.chapter === 3){
        if(props.stage === 1){
            return (
                <div className='table-narration'>
                    A második részben elért eredmények:
                    <ul>
                        <li>{props.name} erőtt vett magán és a főnöke elé állt előléptetés gyanánt. Szerencséje volt, mert egy ideje már érett neki a fizetésemelés, ami most el is érkezett. Az új havi <PopupInfo place="brutto"/> bére {props.salary} Ft, ami <PopupInfo place="netto"/> {props.salary * 0.665} Ft-nak felel meg.</li>
                        <li>Ebben az időszakban összesen {props.moneyGet} Ft-ot sikerült szereznie.</li>
                        <li>Ugyan ebben az időszakban {props.moneySpent} Ft-ot költött el.</li>
                    </ul>
                    <i className="narration">Kattints az aktív körre a tovább lépéshez!</i>
                </div>
            );
        }else if(props.stage === 2){
            return (
                <div className='table-narration'>
                    A második részben elért eredmények:
                    <ul>
                        <li>{props.name} erőtt vett magán és a főnöke elé állt előléptetés gyanánt. Sajnos a felettese szerint még nem tett eleget azért, hogy fizetésemelést kapjon, így minden maradt a régi kerékvágásban. A havi <PopupInfo place="brutto"/> bére továbbra is {props.salary} Ft, ami <PopupInfo place="netto"/> {props.salary * 0.665} Ft-nak felel meg.</li>
                        <li>Ebben az időszakban összesen {props.moneyGet} Ft-ot sikerült szereznie.</li>
                        <li>Ugyan ebben az időszakban {props.moneySpent} Ft-ot költött el.</li>
                    </ul>
                    <i className="narration">Kattints az aktív körre a tovább lépéshez!</i>
                </div>
            );
        }else if(props.stage === 3){
            return (
                <div className='table-narration'>
                    A második részben elért eredmények:
                    <ul>
                        <li>{props.name} 5 év után úgy döntött, hogy új munkát keres. Megtalálta számára az álom munkát, és gondolta szerencsét próbál vele. Jól sikerült az interjú, magabiztos volt és a cég ügyvezetőjét is meggyőzte alkalmasságáról. A továbbiakban <span className="lower">{props.jobname}ként</span> fog dolgozni.</li>
                        <li>Új havi <PopupInfo place="brutto"/> bére {props.salary} Ft, ami <PopupInfo place="netto"/> {props.salary * 0.665} Ft-nak felel meg.</li>
                        <li>Ebben az időszakban összesen {props.moneyGet} Ft-ot sikerült szereznie.</li>
                        <li>Ugyan ebben az időszakban {props.moneySpent} Ft-ot költött el.</li>
                    </ul>
                    <i className="narration">Kattints az aktív körre a tovább lépéshez!</i>
                </div>
            );
        }else if(props.stage === 4){
            return (
                <div className='table-narration'>
                    A második részben elért eredmények:
                    <ul>
                        <li>{props.name} 5 év után úgy döntött, hogy új munkát keres. Megtalálta számára az álom munkát, és gondolta szerencsét próbál vele. Sajnos borzalmasan rosszul sikerült az interjú, végig ideges és stresszes volt. Annyira akarta ezt az állást, hogy végül e miatt nem sikerült neki. Végül egy másik helyre vették fel, így a továbbiakban <span className="lower">{props.jobname}ként</span> fog dolgozni.</li>
                        <li>Új havi <PopupInfo place="brutto"/> bére {props.salary} Ft, ami <PopupInfo place="netto"/> {props.salary * 0.665} Ft-nak felel meg.</li>
                        <li>Ebben az időszakban összesen {props.moneyGet} Ft-ot sikerült szereznie.</li>
                        <li>Ugyan ebben az időszakban {props.moneySpent} Ft-ot költött el.</li>
                    </ul>
                    <i className="narration">Kattints az aktív körre a tovább lépéshez!</i>
                </div>
            );
        }else if(props.stage === 5){
            return (
                <div className='table-narration'>
                    A második részben elért eredmények:
                    <ul>
                        <li>{props.name} nem vesztegetve az időt, diploma után egyből elkezdtett munkát keresni. El is fogadta az első ajánlatot ami szembejött vele, hogy minél hamarabb <PopupInfo place="torleszt"/>eni tudja a tartozásait. Végzettségéből adódóan <span className="lower">{props.jobname}ként</span> dolgozik.</li> 
                        <li>A havi <PopupInfo place="brutto"/> bére {props.salary} Ft, ami <PopupInfo place="netto"/> {props.salary * 0.665} Ft-nak felel meg.</li>
                        <li>Ebben az időszakban összesen {props.moneyGet} Ft-ot sikerült szereznie.</li>
                        <li>Ugyan ebben az időszakban {props.moneySpent} Ft-ot költött el. Ez az összeg tartalmazza a <PopupInfo place="hitel"/> <PopupInfo place="torleszto"/>eit is.</li>
                    </ul>
                    <i className="narration">Kattints az aktív körre a tovább lépéshez!</i>
                </div>
            );
        }else if(props.stage === 6){
            let betterMoney = "";
            if(props.oldsalary > props.salary){
                betterMoney = "Sajnos nem járt nagy szerencsével, a fizetése a jelenlegi munkájánál kevesebb mint amit elutasított.";
            }else if(props.oldsalary < props.salary){
                betterMoney = "Szerencséje volt, ugyanis a fizetése magasabb mint amit visszautasított.";
            }else{
                betterMoney = "Jobban nem járt ezzel a munkával, de legalább rosszabbul sem. A fizetése ugyan annyi mint az első ajánlatánál.";
            }
            return (
                <div className='table-narration'>
                    A második részben elért eredmények:
                    <ul>
                        <li>{props.name} nem vesztegetve az időt, diploma után egyből elkezdtett munkát keresni. Nem fogadta el az első ajánlatot, gondolván akad jobban fizető állás, így tovább keresgélt. 1 év el is telt az ajánlat visszautasítása óta, és kétségbeesve el is fogadta az első szembejövő munkát, hogy minél hamarabb <PopupInfo place="torleszt"/>eni tudja a tartozásait. Végzettségéből adódóan <span className="lower">{props.jobname}ként</span> dolgozik.</li>
                        <li>{betterMoney} Így a havi <PopupInfo place="brutto"/> bére {props.salary} Ft, ami <PopupInfo place="netto"/> {props.salary * 0.665} Ft-nak felel meg.</li>
                        <li>Ebben az időszakban összesen {props.moneyGet} Ft-ot sikerült szereznie.</li>
                        <li>Ugyan ebben az időszakban {props.moneySpent} Ft-ot költött el. Ez az összeg tartalmazza a <PopupInfo place="hitel"/> <PopupInfo place="torleszto"/>eit is.</li>
                    </ul>
                    <i className="narration">Kattints az aktív körre a tovább lépéshez!</i>
                </div>
            );
        }else if(props.stage === 10){
            return(
                <div className="chapter-three-table">
                    <p className='box0'>Szia!<br/>Örülök, hogy újra találkozunk.<br/>Egy utolsó dologban kérném a segítségedet. Mióta dolgozni kezdtem folyamatosan spórolok és félreteszem a pénzemet, mert szeretném <PopupInfo place="befektet"/>ni valamibe. Amit viszont nemtudok, hogy <PopupInfo place="valuta"/> legyen vagy <PopupInfo place="kotveny"/>.</p>
                    <div className='box1-ch3'>Te mibe fektetnél be?</div>
                    <button className='box2-ch3' onClick={e => props.onclick1(props.player)}>Befektetés valutába</button>
                    <button className='box3-ch3' onClick={e => props.onclick2(props.player)}>Befektetés kötvénybe</button>
                </div>
            );
        }else if(props.stage === 20 && props.skill < 2){
            return(
                <div className="chapter-three-table">
                    <p className='box0'>Javaslatodra a képességeimhez mérten utána néztem, hogy milyen <PopupInfo place="valuta"/> vásárlási lehetőségeim vannak. Felsoroltam néhányat, amik szimpatikusak számomra, és az előző években az <PopupInfo place="arfolyam"/>a is egészen jól alakult:</p>
                    <div className='col1-ch3-2-title'>WEZ vásárlás</div>
                    <div className='col2-ch3-2-title'>KNO vásárlás</div>
                    <div className='col1-ch3-2'>
                        <PopupInfo place="Arfolyam"/>: 1 WEZ = {props.val1} Ft<br/>
                        Mennyiség: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange1}></input><br/>
                        Fizetendő: {Math.floor(amount1 * props.val1)} Ft<br/>
                        <button onClick={e => props.onclick1(amount1 * props.val1)}>Vásárlás</button>
                    </div>
                    <div className='seperator2-1'></div>
                    <div className='col2-ch3-2'>
                        <PopupInfo place="Arfolyam"/>: 1 KNO = {props.val2} Ft<br/>
                        Mennyiség: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange2}></input><br/>
                        Fizetendő: {Math.floor(amount2 * props.val2)} Ft<br/>
                        <button onClick={e => props.onclick2(amount2 * props.val2)}>Vásárlás</button>
                    </div>
                </div>
            );
        }else if(props.stage === 20 && props.skill >= 2 && props.skill < 4){
            return(
                <div className="chapter-three-table-half-skill">
                    <p className='box0'>Javaslatodra a képességeimhez mérten utána néztem, hogy milyen <PopupInfo place="valuta"/> vásárlási lehetőségeim vannak. Felsoroltam néhányat, amik szimpatikusak számomra, és az előző években az <PopupInfo place="arfolyam"/>a is egészen jól alakult:</p>
                    <div className='col1-ch3-3-title'>WEZ vásárlás</div>
                    <div className='col2-ch3-3-title'>KNO vásárlás</div>
                    <div className='col3-ch3-3-title'>LIS vásárlás</div>
                    <div className='col1-ch3-3'>
                        <PopupInfo place="Arfolyam"/>: 1 WEZ = {props.val1} Ft<br/>
                        Mennyiség: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange1}></input><br/>
                        Fizetendő: {Math.floor(amount1 * props.val1)} Ft<br/>
                        <button onClick={e => props.onclick1(amount1 * props.val1)}>Vásárlás</button>
                    </div>
                    <div className='seperator3-1'></div>
                    <div className='col2-ch3-3'>
                        <PopupInfo place="Arfolyam"/>: 1 KNO = {props.val2} Ft<br/>
                        Mennyiség: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange2}></input><br/>
                        Fizetendő: {Math.floor(amount2 * props.val2)} Ft<br/>
                        <button onClick={e => props.onclick2(amount2 * props.val2)}>Vásárlás</button>
                    </div>
                    <div className='seperator3-2'></div>
                    <div className='col3-ch3-3'>
                        <PopupInfo place="Arfolyam"/>: 1 LIS = {props.val3} Ft<br/>
                        Mennyiség: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange3}></input><br/>
                        Fizetendő: {Math.floor(amount3 * props.val3)} Ft<br/>
                        <button onClick={e => props.onclick3(amount3 * props.val3)}>Vásárlás</button>
                    </div>
                </div>
            );
        }else if(props.stage === 20 && props.skill === 4){
            return(
                <div className="chapter-three-table">
                    <p className='box0'>Javaslatodra a képességeimhez mérten utána néztem, hogy milyen <PopupInfo place="valuta"/> vásárlási lehetőségeim vannak. Felsoroltam néhányat, amik szimpatikusak számomra, és az előző években az <PopupInfo place="arfolyam"/>a is egészen jól alakult:</p>
                    <div className='col1-ch3-4-title'>WEZ vásárlás</div>
                    <div className='col2-ch3-4-title'>KNO vásárlás</div>
                    <div className='col3-ch3-4-title'>LIS vásárlás</div>
                    <div className='col4-ch3-4-title'>ADP vásárlás</div>
                    <div className='col1-ch3-4'>
                        <PopupInfo place="Arfolyam"/>:<br/> 1 WEZ = {props.val1} Ft<br/>
                        Mennyiség: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange1}></input><br/>
                        Fizetendő: {Math.floor(amount1 * props.val1)} Ft<br/>
                        <button onClick={e => props.onclick1(amount1)}>Vásárlás</button>
                    </div>
                    <div className='seperator4-1'></div>
                    <div className='col2-ch3-4'>
                        <PopupInfo place="Arfolyam"/>:<br/> 1 KNO = {props.val2} Ft<br/>
                        Mennyiség: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange2}></input><br/>
                        Fizetendő: {Math.floor(amount2 * props.val2)} Ft<br/>
                        <button onClick={e => props.onclick2(amount2)}>Vásárlás</button>
                    </div>
                    <div className='seperator4-2'></div>
                    <div className='col3-ch3-4'>
                        <PopupInfo place="Arfolyam"/>:<br/> 1 LIS = {props.val3} Ft<br/>
                        Mennyiség: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange3}></input><br/>
                        Fizetendő: {Math.floor(amount3 * props.val3)} Ft<br/>
                        <button onClick={e => props.onclick3(amount3)}>Vásárlás</button>
                    </div>
                    <div className='seperator4-3'></div>
                    <div className='col4-ch3-4'>
                        <PopupInfo place="Arfolyam"/>:<br/> 1 ADP = {props.val4} Ft<br/>
                        Mennyiség: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange4}></input><br/>
                        Fizetendő: {Math.floor(amount4 * props.val4)} Ft<br/>
                        <button onClick={e => props.onclick4(amount4)}>Vásárlás</button>
                    </div>
                </div>
            );
        }else if(props.stage === 30 && props.skill < 2){
            return(
                <div className="chapter-three-table">
                    <p className='box0'>Javaslatodra a képességeimhez mérten utána néztem, hogy milyen lehetőségeim vannak a <PopupInfo place="kotveny"/>ek terén. Felsoroltam néhányat, amik szimpatikusak számomra és a <PopupInfo place="futamido"/> max 5 év:</p>
                    <div className='col1-ch3-2-title'>Magyar Állampapír 1</div>
                    <div className='col2-ch3-2-title'>Magyar Állampapír 2</div>
                    <div className='col1-ch3-2'>
                        <PopupInfo place="Futamido"/>: 5 év<br/>
                        <PopupInfo place="Fixkamat"/><br/>
                        <PopupInfo place="Kamat"/>: 6%<br/>
                        Érték: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange1}></input> Ft<br/>
                        <button onClick={e => props.onclick1(amount1)}>Vásárlás</button>
                    </div>
                    <div className='seperator2-1'></div>
                    <div className='col2-ch3-2'>
                        <PopupInfo place="Futamido"/>: 3 év<br/>
                        <PopupInfo place="Fixkamat"/><br/>
                        <PopupInfo place="Kamat"/>: 4%<br/>
                        Érték: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange2}></input> Ft<br/>
                        <button onClick={e => props.onclick2(amount2)}>Vásárlás</button>
                    </div>
                </div>
            );
        }else if(props.stage === 30 && props.skill >= 2 && props.skill < 4){
            return(
                <div className="chapter-three-table-half-skill">
                    <p className='box0'>Javaslatodra a képességeimhez mérten utána néztem, hogy milyen lehetőségeim vannak a <PopupInfo place="kotveny"/>ek terén. Felsoroltam néhányat, amik szimpatikusak számomra és a <PopupInfo place="futamido"/> max 5 év:</p>
                    <div className='col1-ch3-3-title'>Magyar Állampapír 1</div>
                    <div className='col2-ch3-3-title'>Magyar Állampapír 2</div>
                    <div className='col3-ch3-3-title'>Magyar Állampapír Plusz</div>
                    <div className='col1-ch3-3'>
                        <PopupInfo place="Futamido"/>: 5 év<br/>
                        <PopupInfo place="Fixkamat"/><br/>
                        <PopupInfo place="Kamat"/>: 6%<br/>
                        Érték: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange1}></input> Ft<br/>
                        <button onClick={e => props.onclick1(amount1)}>Vásárlás</button>
                    </div>
                    <div className='seperator3-1'></div>
                    <div className='col2-ch3-3'>
                        <PopupInfo place="Futamido"/>: 3 év<br/>
                        <PopupInfo place="Fixkamat"/><br/>
                        <PopupInfo place="Kamat"/>: 4%<br/>
                        Érték: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange2}></input> Ft<br/>
                        <button onClick={e => props.onclick2(amount2)}>Vásárlás</button>
                    </div>
                    <div className='seperator3-2'></div>
                    <div className='col3-ch3-3'>
                        <PopupInfo place="Futamido"/>: 2 év<br/>
                        <PopupInfo place="Fixkamat"/><br/>
                        <PopupInfo place="Kamat"/>: 7%<br/>
                        Érték: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange3}></input> Ft<br/>
                        <button onClick={e => props.onclick3(amount3)}>Vásárlás</button>
                    </div>
                </div>
            );
        }else if(props.stage === 30 && props.skill === 4){
            return(
                <div className="chapter-three-table">
                    <p className='box0'>Javaslatodra a képességeimhez mérten utána néztem, hogy milyen lehetőségeim vannak a <PopupInfo place="kotveny"/>ek terén. Felsoroltam néhányat, amik szimpatikusak számomra és a <PopupInfo place="futamido"/> max 5 év:</p>
                    <div className='col1-ch3-4-title'>Magyar Állampapír 1</div>
                    <div className='col2-ch3-4-title'>Magyar Állampapír 2</div>
                    <div className='col3-ch3-4-title'>Magyar Állampapír Plusz</div>
                    <div className='col4-ch3-4-title'>Magyar Állampapír Prémium</div>
                    <div className='col1-ch3-4'>
                        <PopupInfo place="Futamido"/>: 5 év<br/>
                        <PopupInfo place="Fixkamat"/><br/>
                        <PopupInfo place="Kamat"/>: 6%<br/>
                        Érték: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange1}></input> Ft<br/>
                        <button onClick={e => props.onclick1(amount1)}>Vásárlás</button>
                    </div>
                    <div className='seperator4-1'></div>
                    <div className='col2-ch3-4'>
                        <PopupInfo place="Futamido"/>: 3 év<br/>
                        <PopupInfo place="Fixkamat"/><br/>
                        <PopupInfo place="Kamat"/>: 4%<br/>
                        Érték: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange2}></input> Ft<br/>
                        <button onClick={e => props.onclick2(amount2)}>Vásárlás</button>
                    </div>
                    <div className='seperator4-2'></div>
                    <div className='col3-ch3-4'>
                        <PopupInfo place="Futamido"/>: 2 év<br/>
                        <PopupInfo place="Fixkamat"/><br/>
                        <PopupInfo place="Kamat"/>: 7%<br/>
                        Érték: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange3}></input> Ft<br/>
                        <button onClick={e => props.onclick3(amount3)}>Vásárlás</button>
                    </div>
                    <div className='seperator4-3'></div>
                    <div className='col4-ch3-4'>
                        <PopupInfo place="Futamido"/>: 1 év<br/>
                        <PopupInfo place="Fixkamat"/><br/>
                        <PopupInfo place="Kamat"/>: 9%<br/>
                        Érték: <input type='number' className='investment-input' autoComplete="off" onChange={handleChange4}></input> Ft<br/>
                        <button onClick={e => props.onclick4(amount4)}>Vásárlás</button>
                    </div>
                </div>
            );
        }else if(props.stage === 21){
            if(props.skill < 2){
                return ( 
                    <div>
                        Sikerült befektetni a pénzemet valutába ahogy javasoltad. Sok gondolkodás és mérlegelés után végül az alábbiakkal lettem gazdagabb:
                        <ul>
                            <li>{props.inv1} WEZ</li>
                            <li>{props.inv2} KNO</li>
                        </ul>
                        Szeretném 5 év múlva eladni őket a piacon, remélem fentebb mentek az <PopupInfo place="arfolyam"/>ok és pozitívan fogok kijönni belőle.<br/>Rengeteg jó tanáccsal láttál el az évek során és segítettél egyenesbe hozni az életemet, ezért örökké hálás leszek neked. Viszont itt az ideje, hogy elköszönjünk egymástól, hogy megtanuljak egyedül is boldogulni a nagyvilágban.<be/>Örültem, hogy megismertelek, még találkoznk!
                    </div>
                );
            }else if(props.skill >= 2 && props.skill < 4){
                return ( 
                    <div>
                        Sikerült befektetni a pénzemet valutába ahogy javasoltad. Sok gondolkodás és mérlegelés után végül az alábbiakkal lettem gazdagabb:
                        <ul>
                            <li>{props.inv1} WEZ</li>
                            <li>{props.inv2} KNO</li>
                            <li>{props.inv3} LIS</li>
                        </ul>
                        Szeretném 5 év múlva eladni őket a piacon, remélem fentebb mentek az <PopupInfo place="arfolyam"/>ok és pozitívan fogok kijönni belőle.<br/>Rengeteg jó tanáccsal láttál el az évek során és segítettél egyenesbe hozni az életemet, ezért örökké hálás leszek neked. Viszont itt az ideje, hogy elköszönjünk egymástól, hogy megtanuljak egyedül is boldogulni a nagyvilágban.<be/>Örültem, hogy megismertelek, még találkoznk!
                    </div>
                );
            }else{
                return ( 
                    <div>
                        Sikerült befektetni a pénzemet valutába ahogy javasoltad. Sok gondolkodás és mérlegelés után végül az alábbiakkal lettem gazdagabb:
                        <ul>
                            <li>{props.inv1} WEZ</li>
                            <li>{props.inv2} KNO</li>
                            <li>{props.inv3} LIS</li>
                            <li>{props.inv4} ADP</li>
                        </ul>
                        Szeretném 5 év múlva eladni őket a piacon, remélem fentebb mentek az <PopupInfo place="arfolyam"/>ok és pozitívan fogok kijönni belőle.<br/>Rengeteg jó tanáccsal láttál el az évek során és segítettél egyenesbe hozni az életemet, ezért örökké hálás leszek neked. Viszont itt az ideje, hogy elköszönjünk egymástól, hogy megtanuljak egyedül is boldogulni a nagyvilágban.<be/>Örültem, hogy megismertelek, még találkoznk!
                    </div>
                );
            }
        }else if(props.stage === 31){
            if(props.skill < 2){
                return ( 
                    <div>
                        Sikerült befektetni a pénzemet kötvénybe ahogy javasoltad. Sok gondolkodás és mérlegelés után végül az alábbiakkal lettem gazdagabb:
                        <ul>
                            <li>Magyar Állampapír 1 {props.inv1} Ft értékben</li>
                            <li>Magyar Állampapír 2 {props.inv2} Ft értékben</li>
                        </ul>
                        Már csak ki kell várnom, hogy leteljen a megszabott <PopupInfo place="futamido"/>, hogy visszakapjam a már  <PopupInfo place="kamat"/>ozott pénzemet.<br/>Rengeteg jó tanáccsal láttál el az évek során és segítettél egyenesbe hozni az életemet, ezért örökké hálás leszek neked. Viszont itt az ideje, hogy elköszönjünk egymástól, hogy megtanuljak egyedül is boldogulni a nagyvilágban.<be/>Örültem, hogy megismertelek, még találkoznk!
                    </div>
                );
            }else if(props.skill >= 2 && props.skill < 4){
                return ( 
                    <div>
                        Sikerült befektetni a pénzemet valutába ahogy javasoltad. Sok gondolkodás és mérlegelés után végül az alábbiakkal lettem gazdagabb:
                        <ul>
                            <li>Magyar Állampapír 1 {props.inv1} Ft értékben</li>
                            <li>Magyar Állampapír 2 {props.inv2} Ft értékben</li>
                            <li>Magyar Állampapír Plusz {props.inv3} Ft értékben</li>
                        </ul>
                        Már csak ki kell várnom, hogy leteljen a megszabott <PopupInfo place="futamido"/>, hogy visszakapjam a már  <PopupInfo place="kamat"/>ozott pénzemet.<br/>Rengeteg jó tanáccsal láttál el az évek során és segítettél egyenesbe hozni az életemet, ezért örökké hálás leszek neked. Viszont itt az ideje, hogy elköszönjünk egymástól, hogy megtanuljak egyedül is boldogulni a nagyvilágban.<be/>Örültem, hogy megismertelek, még találkoznk!
                    </div>
                );
            }else{
                return ( 
                    <div>
                        Sikerült befektetni a pénzemet valutába ahogy javasoltad. Sok gondolkodás és mérlegelés után végül az alábbiakkal lettem gazdagabb:
                        <ul>
                            <li>Magyar Állampapír 1 {props.inv1} Ft értékben</li>
                            <li>Magyar Állampapír 2 {props.inv2} Ft értékben</li>
                            <li>Magyar Állampapír Plusz {props.inv3} Ft értékben</li>
                            <li>Magyar Állampapír Prémium {props.inv4} Ft értékben</li>
                        </ul>
                        Már csak ki kell várnom, hogy leteljen a megszabott <PopupInfo place="futamido"/>, hogy visszakapjam a már  <PopupInfo place="kamat"/>ozott pénzemet.<br/>Rengeteg jó tanáccsal láttál el az évek során és segítettél egyenesbe hozni az életemet, ezért örökké hálás leszek neked. Viszont itt az ideje, hogy elköszönjünk egymástól, hogy megtanuljak egyedül is boldogulni a nagyvilágban.<be/>Örültem, hogy megismertelek, még találkoznk!
                    </div>
                );
            }
        }else{
            return <></>;
        }
    }else{
        return <></>;
    }
}