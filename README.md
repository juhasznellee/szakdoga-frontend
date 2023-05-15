----Prepare <br>
Ajánlott operációs rendszer: Windows 10
Mindenek előtt fel kell telepítenünk a szükséges alkalmazásokat, melyek a linkre kattintva elérhetőek:
<ul>
  <li>Node - https://nodejs.org/en/download/</li>
  <li>Xampp - https://www.apachefriends.org/download.html</li> 
</ul><br>
----Frontend<br>
Nyissuk meg a terminált, és adjuk ki az alábbi parancsot, hogy majd létre tudjunk hozni egy új React projektet (ha már fel van telepítve a „create-react-app”, akkor töröljük ezzel a paranccsal: npm uninstall –g create-react-app , és telepítsük vissza):<br>
<ol>
  <li>npm install –g create-react-app</li>
Hozzunk létre bárhova egy üres mappát, majd nyissuk meg a terminált és írjuk be az alábbi parancsokat, hogy létrehozzuk a projektünket és letöltsük a szükséges bővítményeket:
  <li>npx create-react-app my_react_app	- „my_react_app” a projekt neve</li>
  <li>cd my_react_app			- „my_react_app” a projekt neve</li>
  <li>npm install react-router-dom</li>
  <li>npm install --save react-wheel-of-prizes</li>
  <li>npm install semantic-ui-react semantic-ui-css</li>
  Klónozzuk le a „szakdoga-frontend” nevű repositoryt, majd az „src” mappájával írjuk felül az újonnan létrehozott React projektünk „src” mappáját. Majd indítsuk el az alkalmazásunkat az utolsó paranccsal:
  <li>npm start</li>
</ol>
Fontos, hogy az utolsó parancs kiadása után NE zárjuk be a terminált!<br><br>
----Backend<br>
Miután feltelepítettük a Xampp-ot is, keressük meg a mappák közt a „htdocs” nevű mappát. Hozzunk létre egy „szakdoga-backend” nevezetű üres mappát. Ide klónozzuk le a „szakdoga-backend” nevű repositoryt.
Ezután nyissuk meg az alkalmazást, és nyomjuk meg a „MySQL” mellett lévő „Admin” gombot, ami egy „phpMyAdmin” adatbázist tölt be. Itt létre kell hoznunk egy adatbázist „educ_gamific” néven az alap formátummal. 
Ha ez megvan, lépjünk be a létrehozott adatbázisba és a fejlécen kattintsunk az „Importálás” menüpontra. Az importálandó fájlhoz válasszuk ki a „szakdoga-backend” mappában található „educ-gamific.sql” fájlt, majd nyomjuk meg alul az „Importálás” gombot.<br>
Végül a Xampp alkalmazásban indítsuk el az „Apache” és a „MySQL”-t a „Start” gomb megnyomásával.<br>
Az utasításokat végrehajtva a http://localhost:3000/ linken fog futni a játék a továbbiakban.

