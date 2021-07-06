import './fileLoaders/images';
import './fileLoaders/sounds';

import Game from "./game";

window.addEventListener('load', () => {
   const screenCanvas = document.getElementById('screen');
   const backgroundCanvas = document.getElementById('background');
   const game = new Game(backgroundCanvas, screenCanvas);

   game.init();
});