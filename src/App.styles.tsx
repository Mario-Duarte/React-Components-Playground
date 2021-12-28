import { colors } from 'theme/colors';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    ${normalize}

    html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: 'Roboto', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

`;

export const AppStyles = createGlobalStyle`
    body {
        background-color: ${colors.cityLights};
    }

    ::selection {
        background: ${colors.exodusFruit};
        color: ${colors.cityLights};
    }

    a, a:visited {
        position: relative;
        color: ${colors.exodusFruit};
        text-decoration: none;
        transition: color 0.6s ease-in-out;

        &:after {
            content: "";
            background-color: ${colors.exodusFruit};
            height: 1px;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: rotateY(90deg);
            transition: all 0.6s ease-in-out;
        }

        &:hover, &:focus {
            color: ${colors.prunusAvium};
            text-decoration: none;
            &:after {
                background-color: ${colors.prunusAvium};
                transform: rotateY(0deg);
            }
        }
    }
`;

export default GlobalStyles;