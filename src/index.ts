import { Preset } from './interfaces';
import { EnchantScrollbarVertical } from './scrollbar';
import { EnchantScrollbarHorizontal } from './scrollbar';


export function customizeScrollbar(element: HTMLElement, preset: Preset): void {
    element.style.overflow = 'hidden';
    element.style.position = 'relative';

    // get child element named "scrollable-content"
    const scrollableContent = element.querySelector('.scrollable-content') as HTMLElement;
    scrollableContent.style.position = 'relative';
    scrollableContent.style.height = '100%';
    scrollableContent.style.width = '100%';
    scrollableContent.style.overflow = 'scroll';

    removeDefaultScrollbar();

    // Scroll event
    var lastScrollTop = scrollableContent.scrollTop;
    var lastScrollLeft = scrollableContent.scrollLeft;
    scrollableContent.addEventListener("scroll", function () {
        if (lastScrollTop !== scrollableContent.scrollTop) {
            lastScrollTop = scrollableContent.scrollTop;
            if (verticalScrollbar) {
                verticalScrollbar.getThumb().style.top = `${scrollableContent.scrollTop / (scrollableContent.scrollHeight - scrollableContent.clientHeight) * (scrollableContent.clientHeight - verticalScrollbar.getThumb().clientHeight)}px`;
                verticalScrollbar.setActive();
            }
        }

        if (lastScrollLeft !== scrollableContent.scrollLeft) {
            lastScrollLeft = scrollableContent.scrollLeft;
            if (horizontalScrollbar) {
                horizontalScrollbar.getThumb().style.left = `${scrollableContent.scrollLeft / (scrollableContent.scrollWidth - scrollableContent.clientWidth) * (scrollableContent.clientWidth - horizontalScrollbar.getThumb().clientWidth)}px`;
                horizontalScrollbar.setActive();
            }
        }
    });

    scrollableContent.addEventListener("scrollend", function () {
        verticalScrollbar.setIdle();
        horizontalScrollbar.setIdle();
    });



    var verticalScrollbar: EnchantScrollbarVertical, horizontalScrollbar: EnchantScrollbarHorizontal;
    // check direction
    var needHorizontalScrollbar = scrollableContent.scrollWidth > scrollableContent.clientWidth;
    var needVerticalScrollbar = scrollableContent.scrollHeight > scrollableContent.clientHeight;

    if (needVerticalScrollbar) {
        verticalScrollbar = new EnchantScrollbarVertical(element, scrollableContent, preset);
        verticalScrollbar.getThumb().style.height = `${scrollableContent.clientHeight / scrollableContent.scrollHeight * scrollableContent.clientHeight}px`;
        element.appendChild(verticalScrollbar.getWrapper());

        verticalScrollbar.applyPreset(preset);

        verticalScrollbar.activateMouseEvents();
        verticalScrollbar.setIdle();
    }

    if (needHorizontalScrollbar) {
        horizontalScrollbar = new EnchantScrollbarHorizontal(element, scrollableContent, preset);
        horizontalScrollbar.getThumb().style.width = `${scrollableContent.clientWidth / scrollableContent.scrollWidth * scrollableContent.clientWidth}px`;
        element.appendChild(horizontalScrollbar.getWrapper());

        horizontalScrollbar.applyPreset(preset);

        horizontalScrollbar.activateMouseEvents();
        horizontalScrollbar.setIdle();
    }



}



function removeDefaultScrollbar(): void {
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


