import Menu from "./states/menu";
import Sound from "./helpers/sound";


class Game {
    appWidth: number;
    appHeight: number;
    backgroundCanvas: HTMLCanvasElement;
    screenCanvas: HTMLCanvasElement;
    menu: Menu;
    sound: Sound;

    constructor(backgroundCanvas: HTMLCanvasElement, screenCanvas: HTMLCanvasElement) {
        this.backgroundCanvas = backgroundCanvas;
        this.screenCanvas = screenCanvas;

        this.menu = new Menu(this);
        this.sound = new Sound(this);
    }

    setSize = () => {
        const app: HTMLElement = document.getElementById('app');

        this.screenCanvas.width = this.backgroundCanvas.width = this.appWidth = app.offsetWidth;
        this.screenCanvas.height = this.backgroundCanvas.height = this.appHeight = app.offsetHeight;
    }

    init = () => {
        this.setSize();
        this.setState('menu');
    }

    setState = (state: string) => {
        switch (state) {
            case 'menu':
                return this.menu.init();
            default:
                return '';
        }
    }


}


export default Game;