import { Config } from "./interfaces";
import { arrows } from "./icons";

export abstract class Scrollbar {
    protected enchantContent: HTMLElement;
    protected wrapper: HTMLElement;
    protected track: HTMLElement;
    protected thumb: HTMLElement;

    protected mouseOnThumb = false;
    protected dragging: boolean = false;
    protected config: Config = {
        width: "10px",
        opacity: "1",
        widthWhileActive: "10px",
        opacityWhileActive: "1",

        trackColor: "#f1f1f1",
        trackWidth: "10px",
        trackBorderRadius: "8px",
        trackBorderRadiusWhileActive: "8px",
        trackColorWhileActive: "#f1f1f1",

        thumbColor: "#c1c1c1",
        thumbWidth: "12px",
        thumbBorderRadius: "8px",
        showArrowsWhileActive: false,
        thumbColorWhileActive: "#c1c1c1",
        thumbBorderRadiusWhileActive: "8px",

        showArrows: true,
        arrowsColor: "#c1c1c1",
    }


    constructor(element: HTMLElement, enchantContent: HTMLElement, config: Config) {
        this.enchantContent = enchantContent;
        this.config = config;

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("scrollbarwrapper");
        this.wrapper.style.position = "absolute";
        this.wrapper.style.transition = "opacity 0.5s ease-in-out";

        this.track = document.createElement("div");
        this.track.classList.add("scrollbar-track");
        this.track.style.position = "absolute";
        this.track.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        this.wrapper.appendChild(this.track);

        this.thumb = document.createElement("div");
        this.thumb.classList.add("scrollbar-thumb");
        this.thumb.style.position = "absolute";
        this.thumb.style.backgroundColor = "#999";
        this.track.appendChild(this.thumb);

        element.appendChild(this.wrapper);
    }

    activateMouseEvents() {
        this.getWrapper().addEventListener("mouseenter", this.mouseEnterWrapperHandler);
        this.getWrapper().addEventListener("mouseleave", this.mouseLeaveWrapperHandler);

        this.getThumb().addEventListener("mouseenter", this.mouseEnterThumbHandler);
        this.getThumb().addEventListener("mouseleave", this.mouseLeaveThumbHandler);
    }

    setIdle() {
        if (this.dragging || this.mouseOnThumb) return;

        setTimeout(() => {
            if (!this.dragging && !this.mouseOnThumb) {
                this.wrapper.style.opacity = this.config?.opacity
            }
        }, 1000);

    }

    setActive() {
        this.wrapper.style.opacity = this.config?.opacityWhileActive
    }

    mouseEnterWrapperHandler = () => {
        this.setActive();
    }

    mouseLeaveWrapperHandler = () => {
        this.setIdle();
    }

    mouseEnterThumbHandler = () => {
        this.mouseOnThumb = true;
    }

    mouseLeaveThumbHandler = () => {
        this.mouseOnThumb = false;
    }


    // getters and setters
    public getWrapper(): HTMLElement {
        return this.wrapper;
    }

    public getTrack(): HTMLElement {
        return this.track;
    }

    public getThumb(): HTMLElement {
        return this.thumb;
    }

    public getConfig(): Config {
        return this.config;
    }

    public setConfig(config: Config): void {
        this.config = config;
    }

    public isDragging(): boolean {
        return this.dragging;
    }

}

export class ScrollbarVertical extends Scrollbar {
    private offsetY = 0;

    constructor(element: HTMLElement, enchantContent: HTMLElement, config: Config) {
        super(element, enchantContent, config);
        this.wrapper.style.right = "0";
        this.wrapper.style.top = "0";
        this.wrapper.style.height = "100%";
        this.wrapper.style.width = "10px";

        this.track.style.top = `${config.showArrows ? 10 : 0}px`;
        this.track.style.right = "0";
        this.track.style.bottom = "0";
        this.track.style.width = config.trackWidth || "auto";
        this.track.style.height = `calc(100% - ${config.showArrows ? 20 : 0}px)`;

        this.thumb.style.right = "0";
        this.thumb.style.top = "0";
        this.thumb.style.width = config.width;

        if (config.showArrows) {
            this.addArrows();
        }

        this.applyPreset(config);
    }

    addArrows() {
        const upArrow = document.createElement("div");
        upArrow.classList.add("scrollbar-arrow");
        upArrow.classList.add("up-arrow");
        upArrow.style.position = "absolute";
        upArrow.style.top = "0";
        upArrow.style.right = "0";
        upArrow.innerHTML = arrows.upArrow;
        this.wrapper.appendChild(upArrow);

        const downArrow = document.createElement("div");
        downArrow.classList.add("scrollbar-arrow");
        downArrow.classList.add("down-arrow");
        downArrow.style.position = "absolute";
        downArrow.style.bottom = "0";
        downArrow.style.right = "0";
        downArrow.innerHTML = arrows.downArrow;
        this.wrapper.appendChild(downArrow);
    }

    applyPreset(preset: Config): void {
        this.wrapper.style.width = preset.width;
        this.wrapper.style.opacity = preset.opacity;
        this.wrapper.style.zIndex = `${preset.zIndex}`;
        this.track.style.width = preset.width;
        this.track.style.backgroundColor = preset.trackColor;
        this.track.style.borderRadius = `${preset.trackBorderRadius}`;
        this.thumb.style.backgroundColor = preset.thumbColor;
        this.thumb.style.borderRadius = `${preset.thumbBorderRadius}`;
    }

    activateMouseEvents() {
        super.activateMouseEvents();
        this.getThumb().addEventListener("mousedown", this.thumbMouseDownHandler);
        this.getTrack().addEventListener("mousedown", this.trackMouseDownHandler);
    }

    thumbMouseDownHandler = (e: MouseEvent) => {
        e.preventDefault();
        this.dragging = true;
        this.offsetY = e.clientY - this.getTrack().getBoundingClientRect().top - this.getThumb().offsetTop;

        document.addEventListener("mousemove", this.mouseMoveHandler);
        document.addEventListener("mouseup", this.mouseUpHandler);
    }

    mouseMoveHandler = (e: MouseEvent) => {
        e.preventDefault();
        const boundaryRect = this.getTrack().getBoundingClientRect();
        let y = e.clientY - boundaryRect.top - this.offsetY;
        y = Math.max(0, Math.min(y, boundaryRect.height - this.getThumb().offsetHeight));
        this.getThumb().style.top = `${y}px`;

        const scrollPercentage = y / (boundaryRect.height - this.getThumb().offsetHeight);

        this.enchantContent.scrollTop = scrollPercentage * (this.enchantContent.scrollHeight - this.enchantContent.clientHeight);
    }

    mouseUpHandler = (e: MouseEvent) => {
        e.preventDefault();

        this.dragging = false;

        this.setIdle();

        document.removeEventListener("mousemove", this.mouseMoveHandler);
        document.removeEventListener("mouseup", this.mouseUpHandler);
    }



    trackMouseDownHandler = (e: MouseEvent) => {
        if (this.mouseOnThumb) return;

        e.preventDefault();
        const boundaryRect = this.getTrack().getBoundingClientRect();
        let y = e.clientY - boundaryRect.top - this.getThumb().offsetHeight / 2;
        y = Math.max(0, Math.min(y, boundaryRect.height - this.getThumb().offsetHeight));
        this.getThumb().style.top = `${y}px`;

        const scrollPercentage = y / (boundaryRect.height - this.getThumb().offsetHeight);
        this.enchantContent.scrollTop = scrollPercentage * (this.enchantContent.scrollHeight - this.enchantContent.clientHeight);

        this.thumbMouseDownHandler(e);
    }

}

export class ScrollbarHorizontal extends Scrollbar {
    private offsetX = 0;

    constructor(element: HTMLElement, enchantContent: HTMLElement, config: Config) {
        super(element, enchantContent, config);
        this.wrapper.style.bottom = "0";
        this.wrapper.style.left = "0";
        this.wrapper.style.width = "100%";
        this.wrapper.style.height = "10px";

        this.track.style.left = `${config.showArrows ? 10 : 0}px`;
        this.track.style.bottom = "0";
        this.track.style.right = "0";
        this.track.style.height = "10px";
        this.track.style.width = `calc(100% - ${config.showArrows ? 20 : 0}px)`;

        this.thumb.style.left = "0";
        this.thumb.style.bottom = "0"
        this.thumb.style.height = config.width;

        if (config.showArrows) {
            this.addArrows();
        }

        this.applyPreset(config);
    }

    addArrows() {
        const leftArrow = document.createElement("div");
        leftArrow.classList.add("scrollbar-arrow");
        leftArrow.classList.add("left-arrow");
        leftArrow.style.position = "absolute";
        leftArrow.style.left = "0";
        leftArrow.style.bottom = "0";
        leftArrow.innerHTML = arrows.leftArrow;
        this.wrapper.appendChild(leftArrow);

        const rightArrow = document.createElement("div");
        rightArrow.classList.add("scrollbar-arrow");
        rightArrow.classList.add("right-arrow");
        rightArrow.style.position = "absolute";
        rightArrow.style.right = "0";
        rightArrow.style.bottom = "0";
        rightArrow.innerHTML = arrows.rightArrow;
        this.wrapper.appendChild(rightArrow);
    }

    applyPreset(preset: Config): void {
        this.wrapper.style.opacity = preset.opacity;
        this.track.style.backgroundColor = preset.trackColor;
        this.thumb.style.backgroundColor = preset.thumbColor;
        this.track.style.borderRadius = `${preset.trackBorderRadius}`;
        this.thumb.style.borderRadius = `${preset.thumbBorderRadius}`;
        this.wrapper.style.height = preset.width;
    }

    activateMouseEvents() {
        super.activateMouseEvents();

        this.getThumb().addEventListener("mousedown", this.thumbMouseDownHandler);
        this.getTrack().addEventListener("mousedown", this.trackMouseDownHandler);
    }

    thumbMouseDownHandler = (e: MouseEvent) => {
        e.preventDefault();
        this.dragging = true;
        this.offsetX = e.clientX - this.getTrack().getBoundingClientRect().left - this.getThumb().offsetLeft;

        document.addEventListener("mousemove", this.mouseMoveHandler);
        document.addEventListener("mouseup", this.mouseUpHandler);
    }

    mouseMoveHandler = (e: MouseEvent) => {
        e.preventDefault();
        const boundaryRect = this.getTrack().getBoundingClientRect();
        let x = e.clientX - boundaryRect.left - this.offsetX;
        x = Math.max(0, Math.min(x, boundaryRect.width - this.getThumb().offsetWidth));
        this.getThumb().style.left = `${x}px`;

        const scrollPercentage = x / (boundaryRect.width - this.getThumb().offsetWidth);

        this.enchantContent.scrollLeft = scrollPercentage * (this.enchantContent.scrollWidth - this.enchantContent.clientWidth);

    }

    mouseUpHandler = (e: MouseEvent) => {
        e.preventDefault();
        this.dragging = false;

        document.removeEventListener("mousemove", this.mouseMoveHandler);
        document.removeEventListener("mouseup", this.mouseUpHandler);
    }

    trackMouseDownHandler = (e: MouseEvent) => {
        if (this.mouseOnThumb) return;

        e.preventDefault();
        const boundaryRect = this.getTrack().getBoundingClientRect();
        let x = e.clientX - boundaryRect.left - this.getThumb().offsetWidth / 2;
        x = Math.max(0, Math.min(x, boundaryRect.width - this.getThumb().offsetWidth));
        this.getThumb().style.left = `${x}px`;

        const scrollPercentage = x / (boundaryRect.width - this.getThumb().offsetWidth);
        this.enchantContent.scrollLeft = scrollPercentage * (this.enchantContent.scrollWidth - this.enchantContent.clientWidth);

        this.thumbMouseDownHandler(e);
    }
}