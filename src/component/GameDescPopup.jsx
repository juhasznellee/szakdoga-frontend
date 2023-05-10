import React from 'react'
import { Popup } from 'semantic-ui-react'
import '../home/App.css';

export default function GameDescPopup (props){
  return <>
    <Popup trigger={<button className='popover-button'>Játék leírása</button>} wide='very'>
        <div className='description'>
            A játékban segítenünk kell döntéseket meghozni a kiválasztott karakterünknek.<br/>
            Minden döntésünk befolyással van a karakterünk jövőjére nézve, így jól át kell gondolni, hogy mit tanácsolunk neki.<br/>
            Legyünk figyelmesek, mert lehetőségünk adódik képesség pontok szerzésére, mely később a segítségünkre válhat.<br/><br/>
            
            Bejelentkezni csak rendszergazdai jogosultsággal lehetséges.<br/>
            <ul>
              <li>
                A <i>'Feladatok szerkesztése'</i> gombnál a játékban felbukkanó feladatokat módosíthatjuk, törölhetjük vagy vehetünk fel akár újakat. A 'Feladat' oszlop jelenti a megoldandó feladatot, a 'Válasz' oszlop jelenti a karakter által megadott választ és a 'Megoldás' oszlop jelenti a magadott feladat helyes megoldását, amit elfogad a játék válaszul. A játék mindig 5 feladatot fog kiválasztani véletlenszerűen.
              </li>
              <li>
                A <i>'Munkahelyek szerkesztése'</i> gombnál a lehetséges munkahelyeket szerkeszthetjük, amik közül sorsol a játék. Minden munkához tartozik egy szint (0-nincs diploma, 1-átlagon aluli egyetemet végzett, 2-átlagos egyetemet végzett, 3-átlagon felüli egyetemet végzett).
              </li>
              <li>
                A <i>'Fizetések szerkesztése'</i> gombnál a szerezhető havi bruttó fizetéseket módosíthatjuk. Itt is ugyanúgy minden összeghez tartozik egy szint, tehát a munka és a fizetés szintje össze vannak kötve.
              </li>
            </ul>
        </div>
    </Popup>
  </>;
}