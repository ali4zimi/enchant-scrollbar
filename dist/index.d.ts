declare class Thumb {
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
enum Direction {
    VERTICAL = 0,
    HORIZONTAL = 1
}
declare class Scrollbar {
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
export class EnchantScrollbar {
    constructor();
    init(element?: HTMLElement, options?: Options): void;
    getElement(): HTMLElement;
    getScrollableDiv(): HTMLElement;
    getScrollbar(): Scrollbar;
    injectStyle(): void;
}

//# sourceMappingURL=index.d.ts.map
