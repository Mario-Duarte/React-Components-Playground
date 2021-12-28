import styled from "styled-components";
import { colors } from "../../theme/colors";

export const StyledFooter = styled.footer`
    position: relative;
    width: 100%;
    height: 100px;
    background-color: ${colors.cityLights};
    display: flex;
    justify-content: center;
    background-color: white;
`;

export const InnerFooter = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content:  center;
    align-items: center;

    p {
        margin: 0;
        &:last-child {
            margin-top: ${p => p.theme.spacing(2)};

            ${p => p.theme.breakpoints.up('md')} {
                margin-top: 0;
            }
        }
    }

    ${p => p.theme.breakpoints.up('md')} {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Heart = styled.span`
    color: ${colors.chiGong};
`;