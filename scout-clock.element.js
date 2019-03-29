class Clock extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: var(--clock-face, url(https://s3-eu-west-1.amazonaws.com/jujus-staging/test/scout-face.png));
          background-size: cover;
          height: 10em;
          width: 10em;
          border-radius: 50%;
          position: relative;
          margin: 0 auto;
          background-color: var(--primary-color, #000);
        }
        :host::after {
          boz-sizing: border-box;
          border: .75em solid var(--circle-color, var(--accent-color, #00b9b9));
          width: 75%;
          height: 75%;
          border-radius: 50%;
          content: ' ';
          display: block;
          position: absolute;
          top: 5%;
          left: 5%;
        }
        .seconds, .minutes, .hour {
          position: absolute;
          width: .2em;
          height: 5em;
          top: 0;
          left: calc(50% - .2em);
          transform-origin: bottom;
          background-color: var(--secondary-color, #fff);
          border-radius: .5em;
          z-index: 1;
        }
        .seconds {
          background-color: var(--accent-color, #00b9b9);
        }
        .minutes {
          height: 4em;
          top: 1em;
        }
          
        .hour {
          height: 3em;
          top: 2em;
        }
          

      </style>
      <div class="hour"></div>
      <div class="minutes"></div>
      <div class="seconds"></div>
    `    
    const loop = () => {
      this.tick()
      setTimeout(loop, 1000)
    }
    loop()
  }
  tick() {
   const t = new Date()
   this.shadowRoot.querySelector('.seconds').style.transform = `rotate(${(t.getSeconds()/60)*360}deg)`
   this.shadowRoot.querySelector('.minutes').style.transform = `rotate(${(t.getMinutes()/60)*360}deg)`
   this.shadowRoot.querySelector('.hour').style.transform = `rotate(${(t.getHours()/12)*360 + +(((t.getMinutes()/100)*360) / 12)}deg)`
  }
}

customElements.define('scout-clock', Clock)
