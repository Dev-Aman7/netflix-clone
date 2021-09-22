import { createMuiTheme } from "@material-ui/core/styles";

export const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#808080",
        },
        highlight: "#e5e5e5",
        background: "#141414",
        white: "#FFFFFF",
        black: "#000000",
        red: "#c00",
    },
    // Don't add colors in the palette. Apart from primary, secondary etc...
    // All custom colors should be in a different object.

    // weights
    bold4: 400,
    bold5: 500,
    bold6: 600,
    bold9: 900,

    // font size
    f1: "24px",
    f2: "20px",
    f3: "18px",
    f4: "16px",
    f5: "14px",
    f6: "12px",

    fontFamily: "OpenSans",

    // Heading
    margin: "1rem",
    grey: "#808080",
});

export const lightTheme = createMuiTheme({});
