import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import './Game.css';
import CustomButton from '../component/CustomButton.jsx';
import InfoTable from '../component/InfoTable.jsx';
import Character from '../component/Character.jsx';
import Circle from '../component/Circle.jsx';
import PlayerState from '../component/PlayerState.jsx';
import SkillButton from '../component/SkillButton.jsx';

/* ---------- Randomizáló függvények ---------- */
function randomSelector(array, conditionLevel) {
    if (array.length > 0) {
        let temp = [];
        let randElem = 0;
        for (let i = 0; i < array.length; i++) {
            if (parseInt(array[i].level) === conditionLevel) {
                temp.push(array[i].id);
            }
        }
        randElem = Math.floor(Math.random() * (temp.length - 1 + 1)) + 1;
        return temp[randElem - 1];
    } else {
        return 0;
    }
}
function randomValuta(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getMultipleRandom(arr) {
    if (arr.length > 5) {
        const shuffledArray = [...arr].sort(() => 0.5 - Math.random());
        return shuffledArray.slice(0, 5);
    } else {
        return ([...arr].sort(() => 0.5 - Math.random()));
    }
}

/* ---------- Pénzzel kapcsolatos függvény ---------- */
function getPaid(player) {
    let month = 12; //1 év
    let temp = (player.salary * 0.665) * month; //nettó
    console.log("Keresett összeg 1 év alatt: " + temp);
    return Math.round(temp);
}
function spendMoneyWhileWork(player, min, max) {
    let month = 12; //1 év
    let temp = 0;
    for (let i = 0; i < month; i++) {
        let randomPercent = randomNumber(min, max) - player.skill;
        temp = temp + (player.salary * 0.665) * (randomPercent / 100);
    }
    console.log("Kiadott összeg 1 év alatt: " + temp);
    return Math.round(temp);
}
function spendMoneyWhileUni(player, min, max) {
    let month = 6; //1 félév
    let temp = 0;
    for (let i = 0; i < month; i++) {
        let randomPercent = randomNumber(min, max) - player.skill;
        temp = temp + (100000 * (randomPercent / 100));
    }
    console.log("Kiadott összeg 1 félév alatt: " + temp);
    return Math.round(temp);
}
function payBackStudentLoan() {
    let month = 12; //1 év
    let temp = 0;
    for (let i = 0; i < month; i++) {
        temp = temp + 48857;
    }
    console.log("Visszafizetett összeg 1 év alatt: " + temp);
    return Math.round(temp);
}


/* -------------------------------------------------------------------------------------------------------------------------------------------- */
export default function Game() {
    /* ---------- Tárolt adatok ---------- */
    const jobs = useFetch("http://localhost/szakdoga-backend/php/get_jobs.php", []);                //id, description, level
    const salaries = useFetch("http://localhost/szakdoga-backend/php/get_salaries.php", []);        //id, description, level
    const playerInfo = useFetch("http://localhost/szakdoga-backend/php/get_player_info.php", []);   //id, name, gender, money, skill, level, job_id, job_name, salary_id, salary
    const tasks = useFetch("http://localhost/szakdoga-backend/php/get_tasks.php", []);                //id, task, answer, solution    
    const [answers, setAnswer] = useState(0);
    const [move, setMove] = useState(0);
    const [chapter, setChapter] = useState(0);
    const [stage, setStage] = useState(1);
    const [circle, setCircle] = useState(false);
    const [money, setMoney] = useState(-1);
    const [job, setJob] = useState("");
    const [salary, setSalary] = useState(-1);
    const [loan, setLoan] = useState(0);
    const [moneyGet, setMoneyGet] = useState(0);
    const [moneySpent, setMoneySpent] = useState(0);
    const [oldSalary, setOldSalary] = useState(0);
    const [tempArray, setTempArray] = useState([]);
    const [playerSkill, setPlayerSkill] = useState(0);
    const [skillB1, setSkillB1] = useState(false);
    const [skillB2, setSkillB2] = useState(false);
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [val3, setVal3] = useState(0);
    const [val4, setVal4] = useState(0);
    const [investment, setInvestment] = useState(0);
    const [inv1, setInv1] = useState(0);
    const [inv2, setInv2] = useState(0);
    const [inv3, setInv3] = useState(0);
    const [inv4, setInv4] = useState(0);
    useEffect(() => {
        setTempArray(getMultipleRandom(tasks));
        setVal1(randomValuta(250, 350));
        setVal2(randomValuta(250, 350));
        setVal3(randomValuta(230, 330));
        setVal4(randomValuta(210, 310));
    }, [tasks]);

    /* ---------- Random megjelenő képzettség számoló ---------- */
    const getSkillLevel = (button) => {
        if(button === 1) {
            setSkillB1(false);
        }else{
            setSkillB2(false);
        }
        setPlayerSkill(playerSkill + 1);
        playerInfo[0].skill = playerSkill;
    };

    /* ---------- Első döntési pont ---------- */
    const toCh1Button = () => {
        setMove(1);
        setChapter(chapter + 1); //1
        setStage(stage + 1); //2
        setTimeout(function () {
            setCircle(true);
            setMoney(money + parseInt(playerInfo[0].money) + 1);
            setJob("Munkanélküli");
            setSalary(salary + 1);
        }, 5000);
    };
    const setCh1 = () => { //döntés választás - 1.skill (1.gomb)
        setCircle(false);
        setStage(stage + 1); //3
        setTimeout(function () {
            setSkillB1(true);
            setTimeout(function () {
                setSkillB1(false);
            }, randomNumber(1500, 3000));
        }, randomNumber(1000, 3000));
    };

    /* ----- MUNKA */
    const getJobCh1 = () => { //munka sorsolás, feladat bevezetése - 2.skill (2.gomb)
        playerInfo[0].level = 0;
        playerInfo[0].job_id = randomSelector(jobs, 0);
        playerInfo[0].salary_id = randomSelector(salaries, 0);
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id === playerInfo[0].job_id) {
                playerInfo[0].job_name = jobs[i].description;
            }
        }
        for (let i = 0; i < salaries.length; i++) {
            if (salaries[i].id === playerInfo[0].salary_id) {
                playerInfo[0].salary = parseInt(salaries[i].description);
            }
        }
        setTimeout(function () {
            setSkillB2(true);
            setTimeout(function () {
                setSkillB2(false);
            }, randomNumber(1500, 3000));
        }, randomNumber(1000, 3000));
        setJob(playerInfo[0].job_name);
        setSalary(salary + parseInt(playerInfo[0].salary));
        setStage(stage + 10 + 1); //14
    };
    const beforeTasksCh1 = () => {
        setStage(stage + 1); //15
    };
    const getTasks = () => { //feladatok kiosztása - CH1 / CH2
        if (tasks.length > 0) {
            let temp = tempArray.map((task, index) => (<div key={index}>{index + 1}.| {task.task}<input type='text' id={index} defaultValue={task.answer} className='task-input' onChange={checkAnswer} autoComplete="off"></input></div>));
            return (
                <div className='table-narration'>
                    <div className='task-title'>A feladatok a következőek: </div>
                    {temp}
                    <CustomButton chapter={1} stage={15} onclick={increaseMoneyAfterTasks} />
                </div>
            );
        } else {
            return (
                <div className='table-narration'>
                    <div className='task-title'>Nincsen megjeleníthető feladat!</div>
                    <CustomButton chapter={1} stage={15} onclick={increaseMoneyAfterTasks} />
                </div>
            );
        }

    };
    const checkAnswer = e => { //válaszok ellenőrzése - CH1 / CH2
        let myAnswer = e.target.value;
        let id = e.target.id;
        if (myAnswer === tempArray[id].solution) {
            setAnswer(answers + 1);
            tempArray[id].solution = -1;
        }
    };
    const increaseMoneyAfterTasks = () => { //helyes válaszok esetén alapfizetés növelése - CH1 / CH2
        if (chapter === 1) {
            setStage(stage + 1); //16 - 3.skill (1.gomb)
            setTimeout(function () {
                setSkillB1(true);
                setTimeout(function () {
                    setSkillB1(false);
                }, randomNumber(1500, 3000));
            }, randomNumber(1000, 3000));
        } else {
            setStage(stage + 2); // 37 / 38
        }
        if (answers === 5) {
            playerInfo[0].salary = parseInt(playerInfo[0].salary) + 50000;
            setSalary(salary + 50000);
        }
    };
    const backFromWorkCh1 = () => {
        let allGet = 0;
        let allSpent = 0;
        for (let i = 0; i < 5; i++) { //5 év
            let get = getPaid(playerInfo[0]);
            let spent = spendMoneyWhileWork(playerInfo[0], 70, 90);
            allGet = allGet + get;
            allSpent = allSpent + spent;
            playerInfo[0].money = parseInt(playerInfo[0].money) + get - spent;
        }
        setMoney(playerInfo[0].money);
        setMoneyGet(allGet);
        setMoneySpent(allSpent);
        setMove(2);
        setChapter(chapter + 1); //2
        setStage(10);
        setTimeout(function () {
            setCircle(true);
        }, 5000);
    };

    /* ----- EGYETEM */
    const startUniCh1 = () => { //egyetem bevezetése - 2.skill (2.gomb)
        setTimeout(function () {
            setSkillB2(true);
            setTimeout(function () {
                setSkillB2(false);
            }, randomNumber(1500, 3000));
        }, randomNumber(1000, 3000));
        setStage(stage + 20 + 1); //24
    };
    const spinWheelCh1 = () => { //kerék pörgetés, hogy melyik egyetem
        setStage(stage + 1); //25
    };
    const afterSpinWheelCh1 = (winner) => { //kerék kiértékelése - 3.skill (1.gomb)
        playerInfo[0].job_name = "Egyetemista";
        setJob("Egyetemista");
        setStage(stage + 1); //26
        setTimeout(function () {
            setSkillB1(true);
            setTimeout(function () {
                setSkillB1(false);
            }, randomNumber(1500, 3000));
        }, randomNumber(1000, 3000));
        if (winner === 3) {
            playerInfo[0].level = 3;
        } else if (winner === 2) {
            playerInfo[0].level = 2;
        } else {
            playerInfo[0].level = 1;
        }
        playerInfo[0].money = parseInt(playerInfo[0].money) + 4000000;
        setMoney(money + 4000000);
        setLoan(5871000);
    };
    const backFromUniCh1 = () => {
        let allSpent = 0;
        let spent = 0;
        for (let i = 0; i < 10; i++) { //10 félév
            if (playerInfo[0].level === 3) {
                spent = spendMoneyWhileUni(playerInfo[0], 20, 40);
            } else if (playerInfo[0].level === 2) {
                spent = spendMoneyWhileUni(playerInfo[0], 40, 60);
            } else {
                spent = spendMoneyWhileUni(playerInfo[0], 60, 80);
            }
            allSpent = allSpent + spent;
            playerInfo[0].money = parseInt(playerInfo[0].money) - spent;
        }
        setMoney(playerInfo[0].money);
        setMoneyGet(4000000);
        setMoneySpent(allSpent);
        setMove(2);
        setChapter(chapter + 1); //2
        setStage(30); //30

        setTimeout(function () {
            setCircle(true);
        }, 5000);
    };


    /* ---------- Második döntési pont ---------- */
    const setCh2 = () => {
        setStage(stage + 1); //11 / 31
        setCircle(false);
    };

    /* ----- MUNKA - ELŐLÉPTETÉS */
    const spinWheelPromotionCh2 = () => { // előléptetés
        setStage(stage + 1); //12
    };
    const afterSpinWheelPromotionCh2 = (winner) => { // előléptetés eredménye - 4.skill(1/2.gomb) 
        if (winner === 1) { //sikerült
            playerInfo[0].level = 1;
            playerInfo[0].salary_id = randomSelector(salaries, 1);
            for (let i = 0; i < salaries.length; i++) {
                if (salaries[i].id === playerInfo[0].salary_id) {
                    playerInfo[0].salary = parseInt(salaries[i].description);
                }
            }
            if (answers === 5) {
                playerInfo[0].salary = parseInt(playerInfo[0].salary) + 50000;
            }
            setTimeout(function () {
                setSkillB1(true);
                setTimeout(function () {
                    setSkillB1(false);
                }, randomNumber(1500, 3000));
            }, randomNumber(1000, 3000));
            setSalary(parseInt(playerInfo[0].salary));
            setStage(stage + 1); //13
        } else { //nem sikerült
            setStage(stage + 2); //14
            setTimeout(function () {
                setSkillB2(true);
                setTimeout(function () {
                    setSkillB2(false);
                }, randomNumber(1500, 3000));
            }, randomNumber(1000, 3000));
        }
    };
    const backFromSuccessPromotionCh2 = () => { //sikeres előléptetés után
        let allGet = 0;
        let allSpent = 0;
        for (let i = 0; i < 5; i++) { //5 év
            let get = getPaid(playerInfo[0]);
            let spent = spendMoneyWhileWork(playerInfo[0], 60, 80);
            allGet = allGet + get;
            allSpent = allSpent + spent;
            playerInfo[0].money = parseInt(playerInfo[0].money) + get - spent;
        }
        setMoney(playerInfo[0].money);
        setMoneyGet(allGet);
        setMoneySpent(allSpent);
        setChapter(chapter + 1); //3
        setStage(1); //1
        setMove(3);
        setTimeout(function () {
            setCircle(true);
        }, 5000);
    };
    const backFromFailedPromotionCh2 = () => { //sikertelen előléptetés után
        let allGet = 0;
        let allSpent = 0;
        for (let i = 0; i < 5; i++) { //5 év
            let get = getPaid(playerInfo[0]);
            let spent = spendMoneyWhileWork(playerInfo[0], 70, 90);
            allGet = allGet + get;
            allSpent = allSpent + spent;
            playerInfo[0].money = parseInt(playerInfo[0].money) + get - spent;
        }
        setMoney(playerInfo[0].money);
        setMoneyGet(allGet);
        setMoneySpent(allSpent);
        setChapter(chapter + 1); //3
        setStage(2); //2
        setMove(3);
        setTimeout(function () {
            setCircle(true);
        }, 5000);
    };

    /* ----- MUNKA - ÚJ MUNKA */
    const newJobCh2 = () => { // új munka keresés 
        setStage(stage + 10 + 1); //22
    };
    const spinWheelNewJobCh2 = () => { //álom munkára jelentkezés 
        setStage(stage + 1); //23
    };
    const afterSpinWheelNewJobCh2 = (winner) => { // álom munka eredménye - 4.skill(1/2.gomb)
        if (winner === 1) { //sikerült
            playerInfo[0].level = 2;
            playerInfo[0].salary_id = randomSelector(salaries, 2);
            playerInfo[0].job_id = randomSelector(jobs, 2);
            for (let i = 0; i < salaries.length; i++) {
                if (salaries[i].id === playerInfo[0].salary_id) {
                    playerInfo[0].salary = parseInt(salaries[i].description);
                }
            }
            playerInfo[0].salary_id = randomSelector(salaries, 0);
            for (let i = 0; i < jobs.length; i++) {
                if (jobs[i].id === playerInfo[0].job_id) {
                    playerInfo[0].job_name = jobs[i].description;
                }
            }
            setTimeout(function () {
                setSkillB1(true);
                setTimeout(function () {
                    setSkillB1(false);
                }, randomNumber(1500, 3000));
            }, randomNumber(1000, 3000));
            setJob(playerInfo[0].job_name);
            setSalary(parseInt(playerInfo[0].salary));
            setStage(stage + 1); //24
        } else { //nem sikerült
            playerInfo[0].level = 1;
            playerInfo[0].salary_id = randomSelector(salaries, 1);
            playerInfo[0].job_id = randomSelector(jobs, 1);
            for (let i = 0; i < salaries.length; i++) {
                if (salaries[i].id === playerInfo[0].salary_id) {
                    playerInfo[0].salary = parseInt(salaries[i].description);
                }
            }
            playerInfo[0].salary_id = randomSelector(salaries, 0);
            for (let i = 0; i < jobs.length; i++) {
                if (jobs[i].id === playerInfo[0].job_id) {
                    playerInfo[0].job_name = jobs[i].description;
                }
            }
            setTimeout(function () {
                setSkillB2(true);
                setTimeout(function () {
                    setSkillB2(false);
                }, randomNumber(1500, 3000));
            }, randomNumber(1000, 3000));
            setJob(playerInfo[0].job_name);
            setSalary(parseInt(playerInfo[0].salary));
            setStage(stage + 2); //25
        }
    };
    const backFromSuccessNewJobCh2 = () => { //sikeres álom munka megszerzése
        let allGet = 0;
        let allSpent = 0;
        for (let i = 0; i < 5; i++) { //5 év
            let get = getPaid(playerInfo[0]);
            let spent = spendMoneyWhileWork(playerInfo[0], 60, 80);
            allGet = allGet + get;
            allSpent = allSpent + spent;
            playerInfo[0].money = parseInt(playerInfo[0].money) + get - spent;
        }
        setMoney(playerInfo[0].money);
        setMoneyGet(allGet);
        setMoneySpent(allSpent);
        setChapter(chapter + 1); //3
        setStage(3); //3
        setMove(3);
        setTimeout(function () {
            setCircle(true);
        }, 5000);
    };
    const backFromFailedNewJobCh2 = () => { //sikertelen álom munka megszerzése
        let allGet = 0;
        let allSpent = 0;
        for (let i = 0; i < 5; i++) { //5 év
            let get = getPaid(playerInfo[0]);
            let spent = spendMoneyWhileWork(playerInfo[0], 70, 90);
            allGet = allGet + get;
            allSpent = allSpent + spent;
            playerInfo[0].money = parseInt(playerInfo[0].money) + get - spent;
        }
        setMoney(playerInfo[0].money);
        setMoneyGet(allGet);
        setMoneySpent(allSpent);
        setChapter(chapter + 1); //3
        setStage(4); //4
        setMove(3);
        setTimeout(function () {
            setCircle(true);
        }, 5000);
    };

    /* ----- EGYETEM - MUNKAKERESÉS */
    const jobAfterUniCh2 = () => { //munka + fizetés sorsolása - 4.skill(2.gomb)
        playerInfo[0].salary_id = randomSelector(salaries, playerInfo[0].level);
        playerInfo[0].job_id = randomSelector(jobs, playerInfo[0].level);
        for (let i = 0; i < salaries.length; i++) {
            if (salaries[i].id === playerInfo[0].salary_id) {
                playerInfo[0].salary = parseInt(salaries[i].description);
            }
        }
        playerInfo[0].salary_id = randomSelector(salaries, 0);
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id === playerInfo[0].job_id) {
                playerInfo[0].job_name = jobs[i].description;
            }
        }
        setTimeout(function () {
            setSkillB2(true);
            setTimeout(function () {
                setSkillB2(false);
            }, randomNumber(1500, 3000));
        }, randomNumber(1000, 3000));
        setOldSalary(playerInfo[0].salary);
        setStage(stage + 1); //32
    };
    const newJobAfterUniCh2 = () => { //nem fogadja el az első munkát
        playerInfo[0].salary_id = randomSelector(salaries, playerInfo[0].level);
        playerInfo[0].job_id = randomSelector(jobs, playerInfo[0].level);
        for (let i = 0; i < salaries.length; i++) {
            if (salaries[i].id === playerInfo[0].salary_id) {
                playerInfo[0].salary = parseInt(salaries[i].description);
            }
        }
        playerInfo[0].salary_id = randomSelector(salaries, 0);
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id === playerInfo[0].job_id) {
                playerInfo[0].job_name = jobs[i].description;
            }
        }
        setJob(playerInfo[0].job_name);
        setSalary(parseInt(playerInfo[0].salary));
        setStage(stage + 1); //33
    };
    const acceptJobCh2 = () => { //elfogadja az első munkát
        setJob(playerInfo[0].job_name);
        setSalary(parseInt(playerInfo[0].salary));
        setStage(stage + 2); //34
    };
    const beforeTasksCh2 = () => {
        setStage(stage + 2); //35- nem fogadja / 36- elfogadja
    };
    const backFromWorkFirstJobCh2 = () => {
        let allGet = 0;
        let allSpent = 0;
        let spent = 0;
        let allPaidLoan = 0;
        for (let i = 0; i < 5; i++) { //5 év
            let get = getPaid(playerInfo[0]);
            if (playerInfo[0].level === 3) {
                spent = spendMoneyWhileWork(playerInfo[0], 50, 70);
            } else if (playerInfo[0].level === 2) {
                spent = spendMoneyWhileWork(playerInfo[0], 60, 80);
            } else {
                spent = spendMoneyWhileWork(playerInfo[0], 70, 90);
            }
            let paidLoan = payBackStudentLoan();
            allPaidLoan = allPaidLoan + paidLoan;
            allGet = allGet + get;
            allSpent = allSpent + spent + paidLoan;
            playerInfo[0].money = parseInt(playerInfo[0].money) + get - spent;
        }
        setLoan(loan - allPaidLoan);
        setMoney(playerInfo[0].money);
        setMoneyGet(allGet);
        setMoneySpent(allSpent);
        setChapter(chapter + 1); //3
        setStage(5); //5
        setMove(3);
        setTimeout(function () {
            setCircle(true);
        }, 5000);
    };
    const backFromWorkSecondJobCh2 = () => {
        let allGet = 0;
        let allSpent = 0;
        let spent = 0;
        let allPaidLoan = 0;
        for (let i = 0; i < 4; i++) { //4 év
            let get = getPaid(playerInfo[0]);
            if (playerInfo[0].level === 3) {
                spent = spendMoneyWhileWork(playerInfo[0], 50, 70);
            } else if (playerInfo[0].level === 2) {
                spent = spendMoneyWhileWork(playerInfo[0], 60, 80);
            } else {
                spent = spendMoneyWhileWork(playerInfo[0], 70, 90);
            }
            let paidLoan = payBackStudentLoan();
            allPaidLoan = allPaidLoan + paidLoan;
            allGet = allGet + get;
            allSpent = allSpent + spent + paidLoan;
            playerInfo[0].money = parseInt(playerInfo[0].money) + get - spent;
        }
        setLoan(loan - allPaidLoan);
        setMoney(playerInfo[0].money);
        setMoneyGet(allGet);
        setMoneySpent(allSpent);
        setChapter(chapter + 1); //3
        setStage(6); //6
        setMove(3);
        setTimeout(function () {
            setCircle(true);
        }, 5000);
    };


    /* ---------- Harmadik döntési pont ---------- */
    const setCh3 = () => { //befektetés módja
        setCircle(false);
        setStage(10); //10
    };

    /* ----- VALUTA */
    const selectCurrenciesInvestmentCh3 = () => {     //valuta befektetés
        setStage(20); //20
        setInvestment(1); //valutába fektet
    };
    const selectValuta1Ch3 = (amount) => {
        if(parseInt(playerInfo[0].money) - parseInt(amount) >= 0){
            playerInfo[0].money = parseInt(playerInfo[0].money) - (parseInt(amount) * val1);
            setMoney(playerInfo[0].money);
            setInv1(inv1 + parseInt(amount));
        }
    };
    const selectValuta2Ch3 = (amount) => {
        if(parseInt(playerInfo[0].money) - parseInt(amount) >= 0){
            playerInfo[0].money = parseInt(playerInfo[0].money) - (parseInt(amount) * val2);
            setMoney(playerInfo[0].money);
            setInv2(inv2 + parseInt(amount));
        }
    };
    const selectValuta3Ch3 = (amount) => {
        if(parseInt(playerInfo[0].money) - parseInt(amount) >= 0){
            playerInfo[0].money = parseInt(playerInfo[0].money) - (parseInt(amount) * val3);
            setMoney(playerInfo[0].money);
            setInv3(inv3 + parseInt(amount));
        }
    };
    const selectValuta4Ch3 = (amount) => {
        if(parseInt(playerInfo[0].money) - parseInt(amount) >= 0){
            playerInfo[0].money = parseInt(playerInfo[0].money) - (parseInt(amount) * val4);
            setMoney(playerInfo[0].money);
            setInv4(inv4 + parseInt(amount));
        }
    };

    /* ----- KÖTVÉNY */
    const selectBondsInvestmentCh3 = () => {     //kötvény befektetés
        setStage(30); //30
        setInvestment(2); //kötvénybe fektet
    };
    const selectBond1Ch3 = (amount) => {
        if(parseInt(playerInfo[0].money) - parseInt(amount) >= 0){
            playerInfo[0].money = parseInt(playerInfo[0].money) - parseInt(amount);
            setMoney(playerInfo[0].money);
            setInv1(inv1 + parseInt(amount));
        }
    };
    const selectBond2Ch3 = (amount) => {
        if(parseInt(playerInfo[0].money) - parseInt(amount) >= 0){
            playerInfo[0].money = parseInt(playerInfo[0].money) - parseInt(amount);
            setMoney(playerInfo[0].money);
            setInv2(inv2 + parseInt(amount));
        }
    };
    const selectBond3Ch3 = (amount) => {
        if(parseInt(playerInfo[0].money) - parseInt(amount) >= 0){
            playerInfo[0].money = parseInt(playerInfo[0].money) - parseInt(amount);
            setMoney(playerInfo[0].money);
            setInv3(inv3 + parseInt(amount));
        }
    };
    const selectBond4Ch3 = (amount) => {
        if(parseInt(playerInfo[0].money) - parseInt(amount) >= 0){
            playerInfo[0].money = parseInt(playerInfo[0].money) - parseInt(amount);
            setMoney(playerInfo[0].money);
            setInv4(inv4 + parseInt(amount));
        }
    };

    /* ----- VÁSÁRLÁS KIÉRTÉKELÉSE */
    const summaryOfInvestmetCh3 = () => {
        setStage(stage + 1);
    };
    const getInvestmentCh3 = () => {

    };

    /* ---------- Állapot jelzők ---------- */
    const setPlayerStateMoney = () => {
        if (playerInfo.length > 0 && money >= 0) {
            return <PlayerState place="money" value={money} />;
        }
        return <></>;
    }
    const setPlayerStateJob = () => {
        if (playerInfo.length > 0 && job.length > 0) {
            return <PlayerState place="job" value={job} />;
        }
        return <></>;
    }
    const setPlayerStateSalary = () => {
        if (playerInfo.length > 0 && salary >= 0) {
            return <PlayerState place="salary" value={salary} />;
        }
        return <></>;
    }
    const setPlayerStateSkill = () => {
        if (playerInfo.length > 0 && job.length > 0) {
            return <PlayerState place="skill" value={playerSkill} />;
        }
        return <></>;
    }
    const setPlayerStateLoan = () => {
        if (playerInfo.length > 0 && loan > 0) {
            return <PlayerState place="loan" value={loan} />;
        }
        return <></>;
    }
    const setPlayerInvTitle = () => {
        if (playerInfo.length > 0 && investment > 0) {
            return <PlayerState place="inv-title"/>;
        }
        return <></>;
    }
    const setPlayerInv1 = () => {
        if (playerInfo.length > 0 && investment > 0 && inv1 > 0) {
            return <PlayerState investment={investment} place="inv1" value={inv1}/>;
        }
        return <></>;
    }
    const setPlayerInv2 = () => {
        if (playerInfo.length > 0 && investment > 0 && inv2 > 0) {
            return <PlayerState investment={investment} place="inv2" value={inv2}/>;
        }
        return <></>;
    }
    const setPlayerInv3 = () => {
        if (playerInfo.length > 0 && investment > 0 && inv3 > 0) {
            return <PlayerState investment={investment} place="inv3" value={inv3}/>;
        }
        return <></>;
    }
    const setPlayerInv4 = () => {
        if (playerInfo.length > 0 && investment > 0  && inv4 > 0) {
            return <PlayerState investment={investment} place="inv4" value={inv4}/>;
        }
        return <></>;
    }


    /* ---------- Karakter képe ---------- */
    const getCharacter = () => {
        if (playerInfo.length > 0) {
            return <Character gender={playerInfo[0].gender} moveTo={move} />;
        }
        return <Character gender="?" />;
    };


    /* ---------- Információs tábla szövegek ---------- */
    const getInfoTableContent = () => {
        if (playerInfo.length > 0) {
            if (chapter === 0 && stage === 1) { //ide is state
                return (
                    <div className="begin-game">
                        <InfoTable chapter={0} stage={1} playername={playerInfo[0].name} />
                        <br />
                        <CustomButton chapter={0} stage={1} onclick={toCh1Button} />
                    </div>
                );
            } else if (chapter === 1 && stage === 2) {
                return (<InfoTable chapter={1} stage={2} name={playerInfo[0].name} />);
            } else if (chapter === 1 && stage === 3) {
                return (<InfoTable chapter={1} stage={3} onclick1={getJobCh1} onclick2={startUniCh1} />);
            } else if (chapter === 1 && stage === 14) {
                return (
                    <div className="table-narration">
                        <InfoTable chapter={1} stage={14} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} />
                        <CustomButton chapter={1} stage={14} onclick={beforeTasksCh1} />
                    </div>
                );
            } else if (chapter === 1 && stage === 15) {
                return getTasks();
            } else if (chapter === 1 && stage === 16) {
                return (
                    <div className="table-narration-shorter2">
                        <InfoTable chapter={1} stage={16} answer={answers} />
                        <CustomButton onclick={backFromWorkCh1} />
                    </div>
                );
            } else if (chapter === 1 && stage === 24) {
                return (
                    <div className="table-narration">
                        <InfoTable chapter={1} stage={24} answer={answers} />
                        <CustomButton onclick={spinWheelCh1} />
                    </div>
                );
            } else if (chapter === 1 && stage === 25) {
                return (<InfoTable chapter={1} stage={25} onclick={afterSpinWheelCh1} />);
            } else if (chapter === 1 && stage === 26) {
                return (
                    <div className='table-narration'>
                        <InfoTable chapter={1} stage={26} level={playerInfo[0].level} />
                        <CustomButton onclick={backFromUniCh1} />
                    </div>
                );
            } else if (chapter === 2 && stage === 10) {
                return (<InfoTable chapter={2} stage={10} name={playerInfo[0].name} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} moneyGet={moneyGet} moneySpent={moneySpent} />);
            } else if (chapter === 2 && stage === 11) {
                return <InfoTable chapter={2} stage={11} onclick1={spinWheelPromotionCh2} onclick2={newJobCh2} />
            } else if (chapter === 2 && stage === 12) {
                return <InfoTable chapter={2} stage={12} onclick={afterSpinWheelPromotionCh2} />
            } else if (chapter === 2 && stage === 13) {
                return (
                    <div className='table-narration-shorter1'>
                        <InfoTable chapter={2} stage={13} salary={playerInfo[0].salary} />
                        <CustomButton onclick={backFromSuccessPromotionCh2} />
                    </div>
                );
            } else if (chapter === 2 && stage === 14) {
                return (
                    <div className='table-narration'>
                        <InfoTable chapter={2} stage={14} salary={playerInfo[0].salary} />
                        <CustomButton onclick={backFromFailedPromotionCh2} />
                    </div>
                );
            } else if (chapter === 3 && stage === 1) {
                return (<InfoTable chapter={3} stage={1} name={playerInfo[0].name} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} moneyGet={moneyGet} moneySpent={moneySpent} />);
            } else if (chapter === 3 && stage === 2) {
                return (<InfoTable chapter={3} stage={2} name={playerInfo[0].name} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} moneyGet={moneyGet} moneySpent={moneySpent} />);
            } else if (chapter === 2 && stage === 22) {
                return (
                    <div className='table-narration-shorter2'>
                        <InfoTable chapter={2} stage={22} />
                        <CustomButton chapter={2} stage={22} onclick={spinWheelNewJobCh2} />
                    </div>
                );
            } else if (chapter === 2 && stage === 23) {
                return <InfoTable chapter={2} stage={23} onclick={afterSpinWheelNewJobCh2} />
            } else if (chapter === 2 && stage === 24) {
                return (
                    <div className='table-narration-shorter2'>
                        <InfoTable chapter={2} stage={24} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} />
                        <CustomButton onclick={backFromSuccessNewJobCh2} />
                    </div>
                );
            } else if (chapter === 2 && stage === 25) {
                return (
                    <div className='table-narration-shorter2'>
                        <InfoTable chapter={2} stage={25} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} />
                        <CustomButton onclick={backFromFailedNewJobCh2} />
                    </div>
                );
            } else if (chapter === 3 && stage === 3) {
                return (<InfoTable chapter={3} stage={3} name={playerInfo[0].name} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} moneyGet={moneyGet} moneySpent={moneySpent} />);
            } else if (chapter === 3 && stage === 4) {
                return (<InfoTable chapter={3} stage={4} name={playerInfo[0].name} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} moneyGet={moneyGet} moneySpent={moneySpent} />);
            } else if (chapter === 2 && stage === 30) {
                return (<InfoTable chapter={2} stage={30} name={playerInfo[0].name} level={playerInfo[0].level} jobname={playerInfo[0].job_name} moneyGet={moneyGet} moneySpent={moneySpent} />);
            } else if (chapter === 2 && stage === 31) {
                return (
                    <div className='table-narration'>
                        <InfoTable chapter={2} stage={31} />
                        <CustomButton onclick={jobAfterUniCh2} />
                    </div>
                );
            } else if (chapter === 2 && stage === 32) {
                return <InfoTable chapter={2} stage={32} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} onclick1={acceptJobCh2} onclick2={newJobAfterUniCh2} />
            } else if (chapter === 2 && stage === 33) {
                return (
                    <div className="table-narration">
                        <InfoTable chapter={2} stage={33} salary={playerInfo[0].salary} oldsalary={oldSalary} />
                        <CustomButton onclick={beforeTasksCh2} />
                    </div>
                );
            } else if (chapter === 2 && stage === 34) {
                return (
                    <div className="table-narration-shorter2">
                        <InfoTable chapter={2} stage={34} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} />
                        <CustomButton onclick={beforeTasksCh2} />
                    </div>
                );
            } else if ((chapter === 2 && stage === 35) || (chapter === 2 && stage === 36)) {
                return getTasks();
            } else if (chapter === 2 && stage === 37) {
                return (
                    <div className="table-narration-shorter2">
                        <InfoTable chapter={2} stage={37} answer={answers} />
                        <CustomButton onclick={backFromWorkSecondJobCh2} />
                    </div>
                );
            } else if (chapter === 2 && stage === 38) {
                return (
                    <div className="table-narration-shorter2">
                        <InfoTable chapter={2} stage={38} answer={answers} />
                        <CustomButton onclick={backFromWorkFirstJobCh2} />
                    </div>
                );
            } else if (chapter === 3 && stage === 5) {
                return (<InfoTable chapter={3} stage={5} name={playerInfo[0].name} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} moneyGet={moneyGet} moneySpent={moneySpent} />);
            } else if (chapter === 3 && stage === 6) {
                return (<InfoTable chapter={3} stage={6} name={playerInfo[0].name} jobname={playerInfo[0].job_name} salary={playerInfo[0].salary} moneyGet={moneyGet} moneySpent={moneySpent} oldsalary={oldSalary} />);
            } else if (chapter === 3 && stage === 10) {
                return (<InfoTable chapter={3} stage={10} onclick1={selectCurrenciesInvestmentCh3} onclick2={selectBondsInvestmentCh3} />);
            } else if (chapter === 3 && stage === 20) {
                return (
                    <>
                        <InfoTable chapter={3} stage={20} skill={playerSkill} val1={val1} onclick1={selectValuta1Ch3} val2={val2} onclick2={selectValuta2Ch3} val3={val3} onclick3={selectValuta3Ch3} val4={val4} onclick4={selectValuta4Ch3}/>
                        <CustomButton onclick={summaryOfInvestmetCh3} chapter={3} stage={20}/>
                    </>
                );
            } else if (chapter === 3 && stage === 30) {
                return (
                    <>
                        <InfoTable chapter={3} stage={30} skill={playerSkill}  onclick1={selectBond1Ch3} onclick2={selectBond2Ch3} onclick3={selectBond3Ch3} onclick4={selectBond4Ch3}/>
                        <CustomButton onclick={summaryOfInvestmetCh3} chapter={3} stage={30}/>
                    </>
                );
            } else if (chapter === 3 && stage === 21) {
                return (
                    <div  className="table-narration">
                        <InfoTable chapter={3} stage={21} skill={playerSkill} inv1={inv1} inv2={inv2} inv3={inv3} inv4={inv4}/>
                        <CustomButton onclick={getInvestmentCh3} chapter={3} stage={21}/>
                    </div>
                );
            } else if (chapter === 3 && stage === 31) {
                return (
                    <div  className="table-narration">
                        <InfoTable chapter={3} stage={31} skill={playerSkill}  onclick1={selectBond1Ch3} onclick2={selectBond2Ch3} onclick3={selectBond3Ch3} onclick4={selectBond4Ch3}/>
                        <CustomButton onclick={getInvestmentCh3} chapter={3} stage={31}/>
                    </div>
                );
            } else {
                return <></>;
            }
        } else {
            return <></>;
        }
    };


    /* ---------- Kezdő állapot ---------- */
    return (
        <div className="App">
            <div id='game-background'>
                <div className='container'>
                    <div id='info-table'>
                        {getInfoTableContent()}
                    </div>
                    <div id='player-money'>
                        {setPlayerStateMoney()}
                    </div>
                    <div id='player-job'>
                        {setPlayerStateJob()}
                    </div>
                    <div id='player-salary'>
                        {setPlayerStateSalary()}
                    </div>
                    <div id='player-skill'>
                        {setPlayerStateSkill()}
                    </div>
                    <div id='player-loan'>
                        {setPlayerStateLoan()}
                    </div>
                    <div id='player-inv-title'>
                        {setPlayerInvTitle()}
                    </div>
                    <div id='player-inv1'>
                        {setPlayerInv1()}
                    </div>
                    <div id='player-inv2'>
                        {setPlayerInv2()}
                    </div>
                    <div id='player-inv3'>
                        {setPlayerInv3()}
                    </div>
                    <div id='player-inv4'>
                        {setPlayerInv4()}
                    </div>
                    <div id='skill-button1'>
                        <SkillButton button={1} active={skillB1} onclick={getSkillLevel} />
                    </div>
                    <div id='skill-button2'>
                        <SkillButton button={2} active={skillB2} onclick={getSkillLevel} />
                    </div>
                </div>
                <div id='character-place'>
                    {getCharacter()}
                </div>
                <div id='main-line'></div>
                <div id='chapter-one-place'>
                    {(chapter === 1 && circle === true) ? <Circle chapter={1} active={true} onclick={setCh1} /> : <Circle chapter={1} active={false} />}
                </div>
                <div id='chapter-two-place'>
                    {(chapter === 2 && circle === true) ? <Circle chapter={2} active={true} onclick={setCh2} /> : <Circle chapter={2} active={false} />}
                </div>
                <div id='chapter-three-place'>
                    {(chapter === 3 && circle === true) ? <Circle chapter={3} active={true} onclick={setCh3} /> : <Circle chapter={3} active={false} />}
                </div>
            </div>
        </div>
    );
}