import styled from "styled-components";
import { colors } from "../../theme/colors";

export const StyledFooter = styled.footer`
    position: relative;
    width: 100%;
    min-height: 100px;
    background-color: ${colors.cityLights};
    display: flex;
    justify-content: center;
`;

export const InnerFooter = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px 40px;
`;

export const Heart = styled.span`
    color: ${colors.chiGong};
`;