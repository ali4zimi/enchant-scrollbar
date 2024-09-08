import { Config } from './interfaces';
import { ScrollbarVertical } from './scrollbar';
import { ScrollbarHorizontal } from './scrollbar';


export class EnchantScrollbar {
    private enchantWrapper: HTMLDivElement;
    private enchantContent: HTMLDivElement;

    private verticalScrollbar: ScrollbarVertical | undefined;
    private horizontalScrollbar: ScrollbarHorizontal | undefined;

    constructor(enchantWrapper: HTMLDivElement, config: Config) {
        this.enchantWrapper = enchantWrapper;
        this.enchantWrapper.style.overflow = 'hidden';
        this.enchantWrapper.style.position = 'relative';

        this.enchantContent = enchantWrapper.querySelector('.enchant-content') as HTMLDivElement;

        this.enchantContent.style.position ? this.enchantContent.style.position = 'relative' : this.enchantContent.style.position;
        this.enchantContent.style.overflow = 'scroll';

        this.removeDefaultScrollbar();

        var needHorizontalScrollbar = this.enchantContent.scrollWidth > this.enchantContent.clientWidth;
        var needVerticalScrollbar = this.enchantContent.scrollHeight > this.enchantContent.clientHeight;

        if (needVerticalScrollbar) {
            this.addVerticalScrollbar(config);
        }

        if (needHorizontalScrollbar) {
            this.addHorizontalScrollbar(config);
        }

        this.addScrollEventListeners();
        this.addWindowResizeListener();
    }


    addVerticalScrollbar(config: Config) {
        this.verticalScrollbar = new ScrollbarVertical(this.enchantWrapper, this.enchantContent, config);
        this.enchantWrapper.appendChild(this.verticalScrollbar.getWrapper());
        this.verticalScrollbar.applyPreset(config);
        this.verticalScrollbar.activateMouseEvents();
        this.verticalScrollbar.setIdle();
    }

    addHorizontalScrollbar(config: Config) {
        this.horizontalScrollbar = new ScrollbarHorizontal(this.enchantWrapper, this.enchantContent, config);
        this.enchantWrapper.appendChild(this.horizontalScrollbar.getWrapper());
        this.horizontalScrollbar.applyPreset(config);
        this.horizontalScrollbar.activateMouseEvents();
        this.horizontalScrollbar.setIdle();
    }

    addScrollEventListeners() {
        var lastScrollTop = this.enchantContent.scrollTop;
        var lastScrollLeft = this.enchantContent.scrollLeft;
        this.enchantContent.addEventListener("scroll", () => {
            if (this.verticalScrollbar?.isDragging() || this.horizontalScrollbar?.isDragging()) return;

            if (lastScrollTop !== this.enchantContent.scrollTop) {
                lastScrollTop = this.enchantContent.scrollTop;
                if (this.verticalScrollbar) {
                    var scrollPercentage = this.enchantContent.scrollTop / (this.enchantContent.scrollHeight - this.enchantContent.clientHeight);
                    var thumbTop = scrollPercentage * (this.verticalScrollbar.getTrack().clientHeight - this.verticalScrollbar.getThumb().clientHeight);
                    this.verticalScrollbar.getThumb().style.top = `${thumbTop}px`;
                    this.verticalScrollbar.setActive();
                }
            }

            if (lastScrollLeft !== this.enchantContent.scrollLeft) {
                lastScrollLeft = this.enchantContent.scrollLeft;
                if (this.horizontalScrollbar) {
                    var scrollPercentage = this.enchantContent.scrollLeft / (this.enchantContent.scrollWidth - this.enchantContent.clientWidth);
                    var thumbLeft = scrollPercentage * (this.horizontalScrollbar.getTrack().clientWidth - this.horizontalScrollbar.getThumb().clientWidth);
                    this.horizontalScrollbar.getThumb().style.left = `${thumbLeft}px`;
                    this.horizontalScrollbar.setActive();
                }
            }
        });

        this.enchantContent.addEventListener("scrollend", () => {
            if (this.verticalScrollbar) {
                this.verticalScrollbar.setIdle();
            }
            if (this.horizontalScrollbar) {
                this.horizontalScrollbar.setIdle();
            }
        });
    }

    addWindowResizeListener() {
        window.addEventListener("resize", () => {
            if (this.verticalScrollbar) {
                this.verticalScrollbar.update();
            }
            if (this.horizontalScrollbar) {
                this.horizontalScrollbar.update();
            }
        });
    }

    removeDefaultScrollbar(_enchantWrapper: HTMLDivElement = this.enchantWrapper) {
        const head = document.head || document.getElementsByTagName("head")[0];

        // if _enchantWrapper has the class name "enchant-wrapper" good, else add it
        if (!_enchantWrapper.classList.contains("enchant-wrapper")) {
            _enchantWrapper.classList.add("enchant-wrapper");
        }

        // if _enchantWrapper has the class name "enchant-content" good, else add it
        if (!_enchantWrapper.querySelector(".enchant-content")) {
            const enchantContent = document.createElement("div");
            enchantContent.classList.add("enchant-content");
            _enchantWrapper.appendChild(enchantContent);
        }

        const style = document.createElement("style");

        style.appendChild(
            document.createTextNode(`
              .enchant-wrapper > .enchant-content::-webkit-scrollbar {
                  display: none;
              }
              .enchant-wrapper > .enchant-content {
                  scrollbar-width: none;
                }
              `)
        );

        head.appendChild(style);
    }

    getEnchantWrapper() {
        return this.enchantWrapper;
    }

    getEnchantContent() {
        return this.enchantContent;
    }

    getVerticalScrollbar() {
        return this.verticalScrollbar;
    }

    getHorizontalScrollbar() {
        return this.horizontalScrollbar;
    }
}

