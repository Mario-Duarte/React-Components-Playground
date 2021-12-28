import { colors } from 'theme/colors';
import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

export const HeroContainer = styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 100px);
    background: linear-gradient(45deg,${darken(0.1, colors.greenDarnerTail)} 0%,${lighten(0.1, colors.pico8Pink)} 100%);
`;

export const HeroInner = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
`;

export const Content = styled.div`
    flex-grow: 1;
    width: 100%;
    max-width: 1440px;
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20vh ${p => p.theme.spacing(3)};
    background-color: ${transparentize(0.8, colors.draculaOrchid)};
    border-radius: 15px;

    ${p => p.theme.breakpoints.up('md')} {
        padding: 20vh ${p => p.theme.spacing(30)};
    }

    span {
        background-color: ${colors.exodusFruit};
        color: ${colors.cityLights};
        font-style: italic;
        padding: 2px 8px;
        border-radius: 4px;
        border: 1px solid ${darken(0.4, colors.exodusFruit)};
        white-space: nowrap;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: white;
    font-weight: 300;
    text-align: center;

    ${p => p.theme.breakpoints.up('md')} {
        font-size: 3.5rem;
    }
`;