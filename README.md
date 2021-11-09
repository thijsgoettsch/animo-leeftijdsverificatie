<p align="center">
  <br />
<img
    alt="Animo logo"
    src="https://raw.githubusercontent.com/animo/animo-demo/main/client/src/assets/animo-logo.jpeg"
    height="250px"
  />
</p>

<h1 align="center"><b>Simple Demo</b></h1>
<p align="center">
  <img
    alt="Pipeline Status"
    src="https://github.com/animo/animo-demo/actions/workflows/continuous-integration.yml/badge.svg"
  />
  <img
       alt="CodeQL"
       src="https://github.com/animo/animo-demo/actions/workflows/build.yml/badge.svg"
       />
  <a href="https://www.typescriptlang.org/"
    ><img
      alt="typescript"
      src="https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg"
  /></a>
</p>
  <p align="center">A very simple, but awesome verifiable credential demo!</p>

## Usage

It's very easy.

```sh
docker-compose up -d
```

That's it! The demo will be exposed on http://localhost:3000. Enjoy ✨

# Installatie Handleiding:

Voor de Leeftijdsverificatie web app is docker een vereiste. 
<br>
Docker is te downloaden via:

* Get Started with. (z.d.). Docker. Geraadpleegd op 9 november 2021, van https://www.docker.com/get-started

Via intellij Idea kunt u dezelfde stappen volgen als hierboven. De URL die ingetypt moet worden is:
<br>
https://github.com/thijsgoettsch/animo-leeftijdsverificatie.git
<br>
Via het map icoon kunt u aangeven waar de applicatie op de computer wordt opgeslagen.
Tot slot druk op clone.

Na het klonen van de webplugin volgt u het volgende stappenplan:

1. In Intellij Idea klikt u rechtsboven in op Add Configuration…
2. Vervolgens klikt u links boven op het + teken.
3. Daarna selecteert u NPM uit de lijst .
4. Bij package.json is het belangrijk dat de package json van de client geselecteerd wordt. 
5. Bij Command moet run staan en bij scripts moet start worden ingevuld.
6. Tot slot klik rechts onder op Apply en op OK
7. Nu kunt u boven klikken op . Dit zorgt ervoor dat applicatie runt via http://localhost:3000/
8. Na het opstarten van de webplugin: “Open Docker”
9. Run het volgende command “docker-compose up -d” in de terminal van de web plugin (Intellij Idea)
10. In Docker start u de leeftijdsverificatie-server-1 op. Dit zorgt ervoor dat http://localhost:3000/ kan communiceren met de student holder app.
11. Gefeliciteerd! U kunt de volgende stappen uitvoeren:

* Ontvangen invitation
   * Via de student holder app kan de QR-code van web plugin ingescand worden.  
* Accepteren invitation
   * Na het inscannen van de QR-code kan het contact worden toegevoegd in de student holder app.
* Bekijk contacten overzicht
   * In de student holder app zijn alle geaccepteerde contacten met bijbehorende informatie te zien.
* Ontvangen credential
   * Een contact kan een credential versturen (bijvoorbeeld een identiteitsbewijs). Deze credential wordt verstuurd naar de student holder app.
* Accepteren credential
   * Na het ontvangen van de credential kan de credential worden toegevoegd in de student holder app.
* Bekijk overzicht credentials 
   * In de student holder app zijn alle geaccepteerde credentials met bijbehorende informatie te zien.
* Ontvangen proof request
   * Na het ontvangen van de credential wordt er een leeftijd proof request verstuurd naar de student holder app.
* Verifiëren proof request
   * Het proof request kan via de student holder app worden geaccepteerd. Het proof request slaagt wanneer iemand 18 jaar of ouder is en faalt wanneer iemand jonger is dan 18 jaar.
