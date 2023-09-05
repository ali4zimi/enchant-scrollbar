class Thumb {
    private element!: HTMLElement;
    private container: any;
    private options: any;
    private mouseOnThumb: boolean = false;


    constructor(container: HTMLElement, options?: any) {
        this.container = container;
        this.options = options;

        this.element = document.createElement("div");
        this.element.classList.add("scrollbar-thumb");
        this.element.style.position = "absolute";
        this.element.style.top = "0";
        this.element.style.width = "8px";
        this.element.style.backgroundColor = "#999";
        this.element.style.borderRadius = `${this.options?.borderRadius}px`;

        // console.log(this.options);

        this.init();
    }

    init(): void {

    }

    getElement(): HTMLElement {
        return this.element;
    }

    getContainer(): HTMLElement {
        return this.container;
    }

    getMouseOnThumb(): boolean {
        return this.mouseOnThumb;
    }

    setHeight(height: number): void {
        this.element.style.height = `${height}px`;
    }

    setPosition(value: number): void {
        this.element.style.top = `${value}px`;
    }
    
    show(): void {

    }

    hide(): void {

    }
    
}

export default Thumb;