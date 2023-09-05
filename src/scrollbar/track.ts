import Thumb from "./thumb";
import { Options } from "../interfaces";

class Track {
    private element!: HTMLDivElement;
    private container: any;
    private options: Options;
    private thumb: Thumb;
    private mouseOnTrack: boolean = false;

    constructor(container: HTMLElement, options?: Options) {
        // console.log(options)
        this.container = container;
        this.options = options;

        this.thumb = new Thumb(container, options);
        this.init();
    }

    init(): void {
        this.element = document.createElement("div");
        this.element.classList.add("scrollbar-track");
        this.element.style.position = "absolute";
        this.element.style.top = "0";
        this.element.style.right = "0";
        this.element.style.bottom = "0";
        this.element.style.width = "8px";
        this.element.style.height = "100%";
        this.element.style.borderRadius = `${this.options?.borderRadius }px`;
        this.element.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

        this.element.appendChild(this.thumb.getElement());

        if (this.container === document.body) {
            this.thumb.setHeight(window.innerHeight / document.body.scrollHeight * window.innerHeight);
        }
        else {
            this.thumb.setHeight(this.container.clientHeight / this.container.scrollHeight * this.container.clientHeight);
        }
            
    }

    getElement(): HTMLElement {
        return this.element;
    }

    getThumb(): Thumb {
        return this.thumb;
    }

    getContainer(): HTMLElement {
        return this.container;
    }

    getMouseOnTrack(): boolean {
        return this.mouseOnTrack;
    }

    addEventListener(): void {
        
    }

    show(): void {

    }

    hide(): void {

    }
}

export default Track;