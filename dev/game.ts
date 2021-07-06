

class Game {
    appWidth: number;
    appHeight: number;
    backgroundCanvas: HTMLCanvasElement;
    screenCanvas: HTMLCanvasElement;

    constructor(backgroundCanvas: HTMLCanvasElement, screenCanvas: HTMLCanvasElement) {
        this.backgroundCanvas = backgroundCanvas;
        this.screenCanvas = screenCanvas;
    }

    setSize = () => {
        const app: HTMLElement = document.getElementById('app');

        this.screenCanvas.width = this.backgroundCanvas.width = this.appWidth = app.offsetWidth;
        this.screenCanvas.height = this.backgroundCanvas.height = this.appHeight = app.offsetHeight;
    }

    init = () => {
        this.setSize();
    }


}


export default Game;