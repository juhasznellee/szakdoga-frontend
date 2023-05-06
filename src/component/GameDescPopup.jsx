import React from 'react'
import { Popup } from 'semantic-ui-react'
import '../home/App.css';

export default function GameDescPopup (){
  <>
    <Popup trigger={<button className='popover-button'>Játék leírása</button>} wide='very'>
        <div className='description'>
            Segítenünk kell döntéseket hozni a kiválasztott karakterünknek. Minden döntésünk befolyással van a karakterünk jövőjére nézve, így jól át kell gondolni, hogy mit választunk. Legyünk figyelmesek a történésekre, mert esetleg képesség pontokat is szerezhetünk, mely segítségével jobb lehetőségek nyílnak meg.<br/>Bejelentkezés után a <i>'Munkahelyek szerkesztése'</i> gombnál a lehetséges munkahelyeket szerkeszthetjük, amik közül sorsol a játék. Minden munkához tartozik egy szint (0-nincs diploma, 1-átlagon aluli egyetemet végzett, 2-átlagos egyetemet végzett, 3-átlagon felüli egyetemet végzett)<br/>A <i>'Fizetések szerkesztése'</i> gombnál a szerezhető havi bruttó fizetéseket módosíthatjuk. Itt is ugyan úgy minden összeghez tartozik egy szint, tehát a munka és a fizetés szintje össze vannak kötve.<br/>A <i>'Feladatok szerkesztése'</i> gombnál a játékban felbukkanó feladatokat módosíthatjuk, törölhetjük vagy vehetünk fel újakat.
        </div>
    </Popup>
  </>
}