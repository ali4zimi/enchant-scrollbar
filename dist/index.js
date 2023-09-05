function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "EnchantScrollbar", () => $882b6d93070905b3$export$843f6040c32573f9);
class $ea01593ec930aa89$var$Thumb {
    constructor(container, options){
        this.mouseOnThumb = false;
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
    init() {}
    getElement() {
        return this.element;
    }
    getContainer() {
        return this.container;
    }
    getMouseOnThumb() {
        return this.mouseOnThumb;
    }
    setHeight(height) {
        this.element.style.height = `${height}px`;
    }
    setPosition(value) {
        this.element.style.top = `${value}px`;
    }
    show() {}
    hide() {}
}
var $ea01593ec930aa89$export$2e2bcd8739ae039 = $ea01593ec930aa89$var$Thumb;


class $bd4f5bb42d3ce615$var$Track {
    constructor(container, options){
        this.mouseOnTrack = false;
        // console.log(options)
        this.container = container;
        this.options = options;
        this.thumb = new (0, $ea01593ec930aa89$export$2e2bcd8739ae039)(container, options);
        this.init();
    }
    init() {
        this.element = document.createElement("div");
        this.element.classList.add("scrollbar-track");
        this.element.style.position = "absolute";
        this.element.style.top = "0";
        this.element.style.right = "0";
        this.element.style.bottom = "0";
        this.element.style.width = "8px";
        this.element.style.height = "100%";
        this.element.style.borderRadius = `${this.options?.borderRadius}px`;
        this.element.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        this.element.appendChild(this.thumb.getElement());
        if (this.container === document.body) this.thumb.setHeight(window.innerHeight / document.body.scrollHeight * window.innerHeight);
        else this.thumb.setHeight(this.container.clientHeight / this.container.scrollHeight * this.container.clientHeight);
    }
    getElement() {
        return this.element;
    }
    getThumb() {
        return this.thumb;
    }
    getContainer() {
        return this.container;
    }
    getMouseOnTrack() {
        return this.mouseOnTrack;
    }
    addEventListener() {}
    show() {}
    hide() {}
}
var $bd4f5bb42d3ce615$export$2e2bcd8739ae039 = $bd4f5bb42d3ce615$var$Track;


var $bd9d1f2440e4790e$var$Direction;
(function(Direction) {
    Direction[Direction["VERTICAL"] = 0] = "VERTICAL";
    Direction[Direction["HORIZONTAL"] = 1] = "HORIZONTAL";
})($bd9d1f2440e4790e$var$Direction || ($bd9d1f2440e4790e$var$Direction = {}));
var $bd9d1f2440e4790e$export$2e2bcd8739ae039 = $bd9d1f2440e4790e$var$Direction;


let $958f164466fdc271$var$dragging = false;
function $958f164466fdc271$export$242d43875ab79ce3(scrollbar) {
    let container = scrollbar.getContainer();
    const trackElement = scrollbar.getTrack().getElement();
    const thumbElement = scrollbar.getTrack().getThumb().getElement();
    let offsetY = 0;
    let mouseOnThumb = false;
    if (container === document.body) container = document.body;
    scrollbar.getTrack().getElement().addEventListener("mousedown", (e)=>{
        if (mouseOnThumb) return;
        e.preventDefault();
        const boundaryRect = scrollbar.getTrack().getElement().getBoundingClientRect();
        let y = e.clientY - boundaryRect.top - thumbElement.offsetHeight / 2;
        y = Math.max(0, Math.min(y, boundaryRect.height - thumbElement.offsetHeight));
        thumbElement.style.top = `${y}px`;
        const scrollPercentage = y / (boundaryRect.height - thumbElement.offsetHeight);
        container.scrollTop = scrollPercentage * (container.scrollHeight - container.clientHeight);
        mouseDownHandler(e);
    });
    scrollbar.getElement().addEventListener("mouseover", ()=>{
        scrollbar.show();
    });
    scrollbar.getElement().addEventListener("mouseleave", ()=>{
        if ($958f164466fdc271$var$dragging) return;
        scrollbar.hide();
    });
    thumbElement.addEventListener("mouseenter", ()=>mouseOnThumb = true);
    thumbElement.addEventListener("mouseleave", ()=>mouseOnThumb = false);
    thumbElement.addEventListener("mousedown", mouseDownHandler);
    function mouseDownHandler(e) {
        e.preventDefault();
        $958f164466fdc271$var$dragging = true;
        offsetY = e.clientY - scrollbar.getTrack().getElement().getBoundingClientRect().top - scrollbar.getTrack().getThumb().getElement().offsetTop;
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
    }
    function mouseMoveHandler(e) {
        e.preventDefault();
        const boundaryRect = scrollbar.getTrack().getElement().getBoundingClientRect();
        let y = e.clientY - boundaryRect.top - offsetY;
        y = Math.max(0, Math.min(y, boundaryRect.height - scrollbar.getTrack().getThumb().getElement().offsetHeight));
        scrollbar.getTrack().getThumb().setPosition(y);
        const scrollPercentage = y / (boundaryRect.height - scrollbar.getTrack().getThumb().getElement().offsetHeight);
        if (container === document.body) window.scrollTo(0, scrollPercentage * (document.body.scrollHeight - window.innerHeight));
        else container.scrollTop = scrollPercentage * (container.scrollHeight - container.clientHeight);
    }
    function mouseUpHandler(e) {
        e.preventDefault();
        $958f164466fdc271$var$dragging = false;
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
        if (!mouseOnThumb) scrollbar.hide();
    }
}
function $958f164466fdc271$export$f43482f3c394e174(scrollableDiv, scrollbar) {
    if (scrollableDiv === document.body) {
        window.addEventListener("scroll", ()=>{
            if ($958f164466fdc271$var$dragging) return;
            let percentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            scrollbar.syncScrollbar(percentage);
            scrollbar.show();
        });
        window.addEventListener("scrollend", ()=>{
            if (!$958f164466fdc271$var$dragging) scrollbar.hide();
        });
    } else {
        scrollableDiv.addEventListener("scroll", ()=>{
            if ($958f164466fdc271$var$dragging) return;
            let percentage = scrollableDiv.scrollTop / (scrollableDiv.scrollHeight - scrollableDiv.clientHeight);
            scrollbar.syncScrollbar(percentage);
            scrollbar.show();
        });
        scrollableDiv.addEventListener("scrollend", ()=>{
            if (!$958f164466fdc271$var$dragging) scrollbar.hide();
        });
    }
}


class $0389e57f7a862317$var$Scrollbar {
    constructor(container, options, direction = (0, $bd9d1f2440e4790e$export$2e2bcd8739ae039).VERTICAL){
        this.options = options;
        if (container !== document.body) {
            this.container = container;
            this.direction = direction;
            this.track = new (0, $bd4f5bb42d3ce615$export$2e2bcd8739ae039)(container, this.options);
            this.createScrollbar("absolute");
        } else {
            this.container = document.body;
            this.direction = direction;
            this.track = new (0, $bd4f5bb42d3ce615$export$2e2bcd8739ae039)(container, this.options);
            this.createScrollbar("absolute");
            this.createScrollbar("fixed");
        }
        this.addEventListener();
        this.init();
    }
    init() {
        (0, $958f164466fdc271$export$242d43875ab79ce3)(this);
        setTimeout(()=>{
            if (this.track.getThumb().getMouseOnThumb()) return;
            this.hide();
        }, 1000);
    }
    getElement() {
        return this.element;
    }
    getContainer() {
        return this.container;
    }
    getDirection() {
        return this.direction;
    }
    getTrack() {
        return this.track;
    }
    createScrollbar(position) {
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
    show() {
        this.element.style.opacity = "1";
    }
    hide() {
        this.element.style.opacity = "0";
    }
    addEventListener() {
        (0, $958f164466fdc271$export$f43482f3c394e174)(this.container, this);
    }
    syncScrollbar(percentage) {
        this.track.getThumb().setPosition(percentage * (this.track.getElement().offsetHeight - this.track.getThumb().getElement().offsetHeight));
    }
}
var $0389e57f7a862317$export$2e2bcd8739ae039 = $0389e57f7a862317$var$Scrollbar;



class $882b6d93070905b3$export$843f6040c32573f9 {
    /* 
          @param element: HTMLElement
          @param options: any
      */ constructor(){
        // default options
        this.options = {
            scrollbarWidth: 8,
            borderRadius: 8,
            zIndex: 999,
            theme: "light",
            minimizeOnBlur: true,
            autoHide: true,
            autoHideDelay: 1000,
            padding: 0
        };
    }
    init(element, options) {
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
            this.scrollbar = new (0, $0389e57f7a862317$export$2e2bcd8739ae039)(this.scrollableDiv, this.options, (0, $bd9d1f2440e4790e$export$2e2bcd8739ae039).VERTICAL);
            this.element.appendChild(this.scrollbar.getElement());
        } else {
            this.element = document.body;
            this.scrollbar = new (0, $0389e57f7a862317$export$2e2bcd8739ae039)(this.element, this.options, (0, $bd9d1f2440e4790e$export$2e2bcd8739ae039).VERTICAL);
            this.element.appendChild(this.scrollbar.getElement());
        }
        this.injectStyle();
    }
    getElement() {
        return this.element;
    }
    getScrollableDiv() {
        return this.scrollableDiv;
    }
    getScrollbar() {
        return this.scrollbar;
    }
    // TODO: add browser compatibility
    injectStyle() {
        const head = document.head || document.getElementsByTagName("head")[0];
        const style = document.createElement("style");
        style.appendChild(document.createTextNode(`
          .enchant-scrollable-content::-webkit-scrollbar {
              display: none;
          }
          .enchant-scrollable-content {
              scrollbar-width: none;
            }
          `));
        // if the target element is the body
        if (this.element === document.body) style.appendChild(document.createTextNode(`
                ::-webkit-scrollbar {
                    display: none;
                }
                body {
                    scrollbar-width: none;
                }
            `));
        head.appendChild(style);
    }
}


//# sourceMappingURL=index.js.map
