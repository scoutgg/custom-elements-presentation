# Presentasjon, Fagkveld 29/03/19

[Øysten Østebø Olsen](https://github.com/fireneslo) & [Torbjørn Angeltveit](https://github.com/angeltveit)

# Ressurser
Selve presentasjonen finner du her:
https://slides.com/angeltveit/deck-13/live

Codepen eksempelet finner man her: https://codepen.io/angeltveit/pen/NOpdRo

Koden for Custom Elementet ligger under: https://github.com/scoutgg/custom-elements-presentation/blob/master/scout-clock.element.js

# Eksempel på bruk
Alt du behøver å gjøre i din HTML-fil er å inkludere scriptet, og deretter kan du bruke `<scout-clock></scout-clock>` som et helt vanlig HTML-element. Alt som ligger under `:host` i CSS-en kan du justere fra utsiden, samt alle CSS-variabler kan overskrives for å lage egne tema.

```html
<!doctype html>
<html>
  <head>
    <title>Hello, what time is it?</title>
    <script src="https://cdn.jsdelivr.net/gh/scoutgg/custom-elements-presentation@master/scout-clock.element.js"></script>
  </head>
  <body>
    <scout-clock></scout-clock>
  </body>
</html>
```
That's it! 🎉
# Scout Gaming Group
Interessert i å jobbe med eller lære mer om Web Components? Send gjerne en epost til [tan@scoutgg.com](mailto:tan@scoutgg.com)!

# Widgets
Interessert dykke videre inn i Web Components og Custom Elements? Ta en kikk på vårt bibliotek som forenkler mye av prosessen og lar deg bruke flere forskjellige templating språk: http://www.widgetslib.com

# TodoMVC
Takk til http://todomvc.com/ for eksemplene som ble brukt.
