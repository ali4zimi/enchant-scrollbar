export interface Config {
    width: string;  
    opacity: string;
    widthWhileActive: string;    
    opacityWhileActive: string;
    alwaysVisible?: boolean;
    zIndex?: string;

    trackColor: string;  
    trackWidth?: string;
    trackBorderRadius?: string;
    trackColorWhileActive: string;
    showArrowsWhileActive: boolean;
    
    thumbColor: string;
    thumbWidth?: string;
    thumbBorderRadius?: string;
    thumbColorWhileActive?: string;
    trackBorderRadiusWhileActive?: string;
    thumbBorderRadiusWhileActive?: string;  

    // show arrows default is true
    showArrows: boolean;
    arrowsColor?: string;
    arrowsWidth?: string;
    arrowsHeight?: string;
}
