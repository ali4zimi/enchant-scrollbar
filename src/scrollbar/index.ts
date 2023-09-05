
import Track from "./track";
import Direction from "./direction";
import { mouseHandler } from "../events/index";
import { scrollHandler } from "../events/index";
import { Options } from "../interfaces";

class Scrollbar {
    private element!: HTMLElement;
    private container: HTMLElement;
    private options: Options;
    private direction: Direction
    private track: Track;

    constructor(container?: HTMLElement, options?: Options, direction: Direction = Direction.VERTICAL) {
        this.options = options;

        if (container !== document.body) {
            this.container = container;
            this.direction = direction;
            this.track = new Track(container, this.options);
            this.createScrollbar('absolute');
        }
        else {
            this.container = document.body;
            this.direction = direction;
            this.track = new Track(container, this.options);
            this.createScrollbar('absolute');
            this.createScrollbar('fixed');
        }

        

        this.addEventListener();
        
        
        this.init();
    }

    init(): void {

        mouseHandler(this);

        setTimeout(() => {
            if (this.track.getThumb().getMouseOnThumb()) return;
            this.hide();
        }, 1000);
    }

    getElement(): HTMLElement {
        return this.element;
    }

    getContainer(): HTMLElement {
        return this.container;
    }

    getDirection(): Direction {
        return this.direction;
    }

    getTrack(): Track {
        return this.track;
    }

    createScrollbar(position: string ): void {
        this.element = document.createElement("div");
        this.element.classList.add("scrollbar");
        this.element.style.position = position;
        this.element.style.right = "0";
        this.element.style.top = "0";
        this.element.style.height = "100%";
        this.element.style.width = "10px";
        this.element.style.transition = "opacity 0.5s ease-in-out";
        this.element.style.zIndex = "999";
        this.element.appendChild(this.track.getElement());
    }


    show(): void {
        this.element.style.opacity = "1";
    }

    hide(): void {
        this.element.style.opacity = "0";
    }

    addEventListener() {
        scrollHandler(this.container, this);
    }

    syncScrollbar(percentage: number): void {
        this.track.getThumb().setPosition(percentage * (this.track.getElement().offsetHeight - this.track.getThumb().getElement().offsetHeight));
    }


}

export default Scrollbar;