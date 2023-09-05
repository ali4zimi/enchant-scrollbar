import Scrollbar from "../scrollbar/index";

let dragging = false;

export function mouseHandler(scrollbar: Scrollbar) {
    let container = scrollbar.getContainer();
    const trackElement = scrollbar.getTrack().getElement();
    const thumbElement = scrollbar.getTrack().getThumb().getElement();
    let offsetY = 0;
    let mouseOnThumb = false;

    if (container === document.body) {
        container = document.body;
    }

    scrollbar.getTrack().getElement().addEventListener("mousedown", (e) => {
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

    scrollbar.getElement().addEventListener('mouseover', () => {
        scrollbar.show();
    });

    scrollbar.getElement().addEventListener('mouseleave', () => {
        if (dragging) return;
        scrollbar.hide();
    });

    thumbElement.addEventListener("mouseenter", () => mouseOnThumb = true);
    thumbElement.addEventListener("mouseleave", () => mouseOnThumb = false);

    thumbElement.addEventListener("mousedown", mouseDownHandler);

    function mouseDownHandler(e: MouseEvent) {
        e.preventDefault();
        dragging = true;
        offsetY = e.clientY - scrollbar.getTrack().getElement().getBoundingClientRect().top - scrollbar.getTrack().getThumb().getElement().offsetTop;

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
    }

    function mouseMoveHandler(e: MouseEvent) {
        e.preventDefault();
        const boundaryRect = scrollbar.getTrack().getElement().getBoundingClientRect();
        let y = e.clientY - boundaryRect.top - offsetY;
        y = Math.max(0, Math.min(y, boundaryRect.height - scrollbar.getTrack().getThumb().getElement().offsetHeight));
        scrollbar.getTrack().getThumb().setPosition(y);

        const scrollPercentage = y / (boundaryRect.height - scrollbar.getTrack().getThumb().getElement().offsetHeight);

        if (container === document.body) {
            window.scrollTo(0, scrollPercentage * (document.body.scrollHeight - window.innerHeight));
        } else {
            container.scrollTop = scrollPercentage * (container.scrollHeight - container.clientHeight);
        }
    }

    function mouseUpHandler(e: MouseEvent) {
        e.preventDefault();
        dragging = false;

        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);

        if (!mouseOnThumb) {
            scrollbar.hide();
        }
    }

}

export function scrollHandler(scrollableDiv: HTMLElement, scrollbar: Scrollbar) {
    if (scrollableDiv === document.body) {
        window.addEventListener('scroll', () => {
            if (dragging) return;
            let percentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            scrollbar.syncScrollbar(percentage);
            scrollbar.show();
        });
    
        window.addEventListener('scrollend', () => {
            if (!dragging) {
                scrollbar.hide();
            }
        });
    }
    else {
        scrollableDiv.addEventListener('scroll', () => {
            if (dragging) return;
            let percentage = scrollableDiv.scrollTop / (scrollableDiv.scrollHeight - scrollableDiv.clientHeight);
            scrollbar.syncScrollbar(percentage);
            scrollbar.show();
        });
    
        scrollableDiv.addEventListener('scrollend', () => {
            if (!dragging) {
                scrollbar.hide();
            }
        });
    }
    
}

