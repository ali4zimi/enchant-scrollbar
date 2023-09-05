import Scrollbar from "./scrollbar/index";
import Direction from "./scrollbar/direction";
import { Options } from "./interfaces";

class EnchantScrollbar {
  /* 
          scrollableDiv is a div that we create and copy the content of the element to it.
          We set the element's overflow to hidden and the scrollableDiv's overflow to auto.
          This way, we can hide the scrollbar of the element and use the scrollbar of the scrollableDiv.
      */
  private element: HTMLElement;
  private scrollableDiv: HTMLElement;
  private scrollbar: Scrollbar;
  private options: any;

  /* 
          @param element: HTMLElement
          @param options: any
      */
  constructor() {
    // default options
    this.options = {
      scrollbarWidth: 8,
      borderRadius: 8,
      zIndex: 999,
      theme: "light",
      minimizeOnBlur: true,
      autoHide: true,
      autoHideDelay: 1000,
      padding: 0,
    };
  }

  init(element?: HTMLElement, options?: Options): void {
    this.element = element;

    if (element) {
      this.element.style.position = "relative";
      this.element.style.overflow = "hidden";

      // We create a div inside the element so it can be scrolled only, not the element itself and the scrollbar
      this.scrollableDiv = document.createElement("div");
      this.scrollableDiv.classList.add("enchant-scrollable-content");
      this.scrollableDiv.style.position = "absolute";
      this.scrollableDiv.style.top = "0";
      this.scrollableDiv.style.left = "0";
      this.scrollableDiv.style.width = "100%";
      this.scrollableDiv.style.height = "100%";
      this.scrollableDiv.style.overflow = "auto";

      this.scrollableDiv.innerHTML = this.element.innerHTML;
      this.element.innerHTML = "";
      this.element.appendChild(this.scrollableDiv);

      // We create an instance of the scrollbar and append it to the element
      this.scrollbar = new Scrollbar(this.scrollableDiv, this.options, Direction.VERTICAL);
      this.element.appendChild(this.scrollbar.getElement());
    } else {
      this.element = document.body;

      this.scrollbar = new Scrollbar(this.element, this.options, Direction.VERTICAL);
      this.element.appendChild(this.scrollbar.getElement());
    }


    this.injectStyle();
  }

  getElement(): HTMLElement {
    return this.element;
  }

  getScrollableDiv(): HTMLElement {
    return this.scrollableDiv;
  }

  getScrollbar(): Scrollbar {
    return this.scrollbar;
  }

  // TODO: add browser compatibility
  injectStyle() {
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");

    style.appendChild(
      document.createTextNode(`
          .enchant-scrollable-content::-webkit-scrollbar {
              display: none;
          }
          .enchant-scrollable-content {
              scrollbar-width: none;
            }
          `)
    );

    // if the target element is the body
    if (this.element === document.body) {
      style.appendChild(
        document.createTextNode(`
                ::-webkit-scrollbar {
                    display: none;
                }
                body {
                    scrollbar-width: none;
                }
            `)
      );
    }

    head.appendChild(style);
  }
}

export { EnchantScrollbar };
