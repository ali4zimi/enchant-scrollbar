declare class Thumb {
    private element;
    private container;
    private options;
    private mouseOnThumb;
    constructor(container: HTMLElement, options?: any);
    init(): void;
    getElement(): HTMLElement;
    getContainer(): HTMLElement;
    getMouseOnThumb(): boolean;
    setHeight(height: number): void;
    setPosition(value: number): void;
    show(): void;
    hide(): void;
}

interface Options {
    scrollbarWidth?: number;
    borderRadius?: number;
    zIndex?: number;
    theme?: string;
    minimizeOnBlur?: boolean;
    autoHide?: boolean;
    autoHideDelay?: number;
    padding?: number;
}

declare class Track {
    private element;
    private container;
    private options;
    private thumb;
    private mouseOnTrack;
    constructor(container: HTMLElement, options?: Options);
    init(): void;
    getElement(): HTMLElement;
    getThumb(): Thumb;
    getContainer(): HTMLElement;
    getMouseOnTrack(): boolean;
    addEventListener(): void;
    show(): void;
    hide(): void;
}

declare enum Direction {
    VERTICAL = 0,
    HORIZONTAL = 1
}

declare class Scrollbar {
    private element;
    private container;
    private options;
    private direction;
    private track;
    constructor(container?: HTMLElement, options?: Options, direction?: Direction);
    init(): void;
    getElement(): HTMLElement;
    getContainer(): HTMLElement;
    getDirection(): Direction;
    getTrack(): Track;
    createScrollbar(position: string): void;
    show(): void;
    hide(): void;
    addEventListener(): void;
    syncScrollbar(percentage: number): void;
}

declare class EnchantScrollbar {
    private element;
    private scrollableDiv;
    private scrollbar;
    private options;
    constructor();
    init(element?: HTMLElement, options?: Options): void;
    getElement(): HTMLElement;
    getScrollableDiv(): HTMLElement;
    getScrollbar(): Scrollbar;
    injectStyle(): void;
}

export { EnchantScrollbar };
