import Menu from "./states/menu";
import Sound from "./helpers/sound";
import ImageStore from "./helpers/imageStore";


class Game {
    appWidth: number;
    appHeight: number;
    backgroundCanvas: HTMLCanvasElement;
    screenCanvas: HTMLCanvasElement;
    bgContext: CanvasRenderingContext2D;
    screenContext: CanvasRenderingContext2D;
    menu: Menu;
    sound: Sound;
    imageStore: ImageStore;

    constructor(backgroundCanvas: HTMLCanvasElement, screenCanvas: HTMLCanvasElement) {
        this.backgroundCanvas = backgroundCanvas;
        this.screenCanvas = screenCanvas;
        this.bgContext = backgroundCanvas.getContext('2d');
        this.screenContext = screenCanvas.getContext('2d');


        this.menu = new Menu(this);
        this.sound = new Sound(this);
        this.imageStore = new ImageStore(this);
    }

    setSize = () => {
        const app: HTMLElement = document.getElementById('app');

        this.screenCanvas.width = this.backgroundCanvas.width = this.appWidth = app.offsetWidth;
        this.screenCanvas.height = this.backgroundCanvas.height = this.appHeight = app.offsetHeight;
    }

    init = () => {
        this.setSize();
        this.imageStore.loadImages();
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