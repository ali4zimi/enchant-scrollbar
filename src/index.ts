import { Config } from './interfaces';
import { EnchantScrollbarVertical } from './scrollbar';
import { EnchantScrollbarHorizontal } from './scrollbar';


export class MyScrollbar {
    private targetContainer: HTMLDivElement;
    private scrollableContent: HTMLDivElement;

    private verticalScrollbar: EnchantScrollbarVertical | undefined;
    private horizontalScrollbar: EnchantScrollbarHorizontal | undefined;

    constructor(targetContainer: HTMLDivElement, config: Config) {
        this.targetContainer = targetContainer;
        this.targetContainer.style.overflow = 'hidden';
        this.targetContainer.style.position = 'relative';

        this.scrollableContent = targetContainer.querySelector('.scrollable-content') as HTMLDivElement;
        console.log(this.scrollableContent.style.position)

        this.scrollableContent.style.position ? this.scrollableContent.style.position = 'relative' : this.scrollableContent.style.position;
        this.scrollableContent.style.overflow = 'scroll';

        this.removeDefaultScrollbar();

        var needHorizontalScrollbar = this.scrollableContent.scrollWidth > this.scrollableContent.clientWidth;
        var needVerticalScrollbar = this.scrollableContent.scrollHeight > this.scrollableContent.clientHeight;

        if (needVerticalScrollbar) {
            this.addVerticalScrollbar(config);
        }

        if (needHorizontalScrollbar) {
            this.addHorizontalScrollbar(config);
        }

        this.addScrollEventListeners();
    }


    addVerticalScrollbar(config: Config) {
        this.verticalScrollbar = new EnchantScrollbarVertical(this.targetContainer, this.scrollableContent, config);
        this.verticalScrollbar.getThumb().style.height = `${this.scrollableContent.clientHeight / this.scrollableContent.scrollHeight * this.verticalScrollbar.getTrack().clientHeight}px`;
        this.targetContainer.appendChild(this.verticalScrollbar.getWrapper());
        this.verticalScrollbar.applyPreset(config);
        this.verticalScrollbar.activateMouseEvents();
        this.verticalScrollbar.setIdle();
    }

    addHorizontalScrollbar(config: Config) {
        this.horizontalScrollbar = new EnchantScrollbarHorizontal(this.targetContainer, this.scrollableContent, config);
        this.horizontalScrollbar.getThumb().style.width = `${this.scrollableContent.clientWidth / this.scrollableContent.scrollWidth * this.horizontalScrollbar.getTrack().clientWidth}px`;
        this.targetContainer.appendChild(this.horizontalScrollbar.getWrapper());
        this.horizontalScrollbar.applyPreset(config);
        this.horizontalScrollbar.activateMouseEvents();
        this.horizontalScrollbar.setIdle();
    }
    
    addScrollEventListeners() {
        var lastScrollTop = this.scrollableContent.scrollTop;
        var lastScrollLeft = this.scrollableContent.scrollLeft;
        this.scrollableContent.addEventListener("scroll", () => {
            if (this.verticalScrollbar?.isDragging() || this.horizontalScrollbar?.isDragging()) return;
            
            if (lastScrollTop !== this.scrollableContent.scrollTop) {
                lastScrollTop = this.scrollableContent.scrollTop;
                if (this.verticalScrollbar) {
                    var scrollPercentage = this.scrollableContent.scrollTop / (this.scrollableContent.scrollHeight - this.scrollableContent.clientHeight);
                    var thumbTop = scrollPercentage * (this.verticalScrollbar.getTrack().clientHeight - this.verticalScrollbar.getThumb().clientHeight);
                    this.verticalScrollbar.getThumb().style.top = `${thumbTop}px`;
                    this.verticalScrollbar.setActive();
                }
            }

            if (lastScrollLeft !== this.scrollableContent.scrollLeft) {
                lastScrollLeft = this.scrollableContent.scrollLeft;
                if (this.horizontalScrollbar) {
                    var scrollPercentage = this.scrollableContent.scrollLeft / (this.scrollableContent.scrollWidth - this.scrollableContent.clientWidth);
                    var thumbLeft = scrollPercentage * (this.horizontalScrollbar.getTrack().clientWidth - this.horizontalScrollbar.getThumb().clientWidth);
                    this.horizontalScrollbar.getThumb().style.left = `${thumbLeft}px`;
                    this.horizontalScrollbar.setActive();
                }
            }
        });

        this.scrollableContent.addEventListener("scrollend", () => {
            if (this.verticalScrollbar) {
                this.verticalScrollbar.setIdle();
            }
            if (this.horizontalScrollbar) {
                this.horizontalScrollbar.setIdle();
            }
        });
    }

    removeDefaultScrollbar(): void {
        const head = document.head || document.getElementsByTagName("head")[0];
        const style = document.createElement("style");
    
        style.appendChild(
            document.createTextNode(`
              .enchant-scrollbar > .scrollable-content::-webkit-scrollbar {
                  display: none;
              }
              .enchant-scrollbar > .scrollable-content {
                  scrollbar-width: none;
                }
              `)
        );
    
        head.appendChild(style);
    }

    getTargetContainer() {
        return this.targetContainer;
    }

    getScrollableContent() {
        return this.scrollableContent;
    }

    getVerticalScrollbar() {
        return this.verticalScrollbar;
    }

    getHorizontalScrollbar() {
        return this.horizontalScrollbar;
    }
}

