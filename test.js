import string from "./css.js";
let n = 1;
let t = 100;
let id;
const player = {
  init: () => {
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    player.bindEvents();
    player.play();
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    n += 1;
    if (n > string.length) {
      window.clearInterval(id);
      return;
    }
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    demo.scrollTop = demo.scrollHeight;
  },
  play: () => {
    id = setInterval(player.run, t);
  },
  pause: () => {
    window.clearInterval(id);
  },
  slow: () => {
    player.pause();
    t = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    t = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    t = 0;
    player.play();
  },
};
player.init();
