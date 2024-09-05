import { Config } from "./interfaces";

export const defaultPreset: Config = {
    width: "10px",
    opacity: "0",
    showArrows: false,
    trackColor: "rgba(150, 150, 150, 0.144)",
    thumbColor: "rgb(150, 150, 150)",
    trackBorderRadius: "0",
    thumbBorderRadius: "0",
    widthWhileActive: "10px",
    opacityWhileActive: "1",
    showArrowsWhileActive: false,
    trackColorWhileActive: "#000",
    thumbColorWhileActive: "#000",
};

export const mac: Config = {
    width: "8px",
    opacity: "0",
    showArrows: false,
    trackColor: "rgba(50 50 50 / 0)",
    thumbColor: "rgba(50 50 50 / 0.67)",
    trackBorderRadius: "8px",
    thumbBorderRadius: "8px",
    widthWhileActive: "10px",
    opacityWhileActive: "0.5",
    showArrowsWhileActive: false,
    trackColorWhileActive: "#000",
    thumbColorWhileActive: "#000",
    trackBorderRadiusWhileActive: "0",
    thumbBorderRadiusWhileActive: "0",
};

