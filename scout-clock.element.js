class Clock extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: url(https://s3-eu-west-1.amazonaws.com/jujus-staging/test/scout-face.png);
          background-size: cover;
          height: 10em;
          width: 10em;
          border-radius: 50%;
          position: relative;
        }
        .seconds, .minutes, .hour {
          position: absolute;
          width: .2em;
          height: 5em;
          top: 0;
          left: calc(50% - .2em);
          transform-origin: bottom;
          background-color: #ffffff;
          border-radius: .5em;
        }
        .seconds {
          background-color: #00b9b9;
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
   this.shadowRoot.querySelector('.hour').style.transform = `rotate(${(t.getHours()/60)*360}deg)`
  }
}

customElements.define('scout-clock', Clock)