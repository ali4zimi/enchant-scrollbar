import { customizeScrollbar } from ".";

const scrollable = document.querySelectorAll(".enchant-scrollbar");


interface Preset {
    width: string; 
    opacity: string;
    showArrows: boolean; 
    trackColor: string;  
    thumbColor: string;  
    trackBorderRadius: string;
    thumbBorderRadius: string;
    widthWhileActive: string;    
    opacityWhileActive: string;
    showArrowsWhileActive: boolean;
    trackColorWhileActive: string;
    thumbColorWhileActive: string;
    trackBorderRadiusWhileActive: string;
    thumbBorderRadiusWhileActive: string;  
}


var preset: Preset = {
    width: "18px",
    opacity: "0",
    showArrows: false,
    trackColor: "#f1f1f1",
    thumbColor: "#c1c1c1",
    trackBorderRadius: "8px",
    thumbBorderRadius: "8px",
    widthWhileActive: "10px",
    opacityWhileActive: "1",
    showArrowsWhileActive: false,
    trackColorWhileActive: "#f1f1f1",
    thumbColorWhileActive: "#c1c1c1",
    trackBorderRadiusWhileActive: "8px",
    thumbBorderRadiusWhileActive: "8px",
};

scrollable.forEach((el) => {
    customizeScrollbar(el as HTMLElement, preset);
});






