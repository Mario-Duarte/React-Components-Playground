import { createTheme } from "@mui/material";

export interface CustomTheme {
    bg: {
        main: string,
        light: string
    },
    text: {
        main: string,
        light: string
    }
}

const theme = createTheme({

    typography: {
        fontFamily: "'Roboto', 'Helvetica Neue', sans-serif",
        body1: {
            fontSize: "1rem",
        },
    },

    bg: {
        main: '#fff',
        light: '#F4F5F7'
    },
    text: {
        main: '#172B4D',
        light: '#262930'
    }
});

export default theme;