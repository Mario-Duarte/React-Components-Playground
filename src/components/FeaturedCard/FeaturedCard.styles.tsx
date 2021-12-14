import {
    Card,
    CardContent,
    CardActionArea,
    Typography,
} from "@mui/material";
import styled from "styled-components";
import { colors } from "../../theme/colors";

export const StyledCard = styled(Card)`
    position: relative;
    border-radius: 0;
    box-shadow: none;
    background-color: #f9f9f9;
    overflow: visible;

    &::after {
        content: "";
        width: 80%;
        height: 5px;
        position: absolute;
        left: 10%;
        right: 10%;
        bottom: 0;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        background-color: black;
        box-shadow: 0px 5px 20px 5px rgba(0,0,0,0.15);
        z-index: -1;
    }
`;

export interface StyledCardMediaProps {
    background: string;
}

export const StyledCardMedia = styled.div<StyledCardMediaProps>`
    width: 100%;
    padding-top: 80%;
    background-image: url(${p => p.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const StyledCardContent = styled(CardContent)`
    padding: 0 40px 40px 40px;
`;

export const Featured = styled.p`
    text-transform: uppercase;
    color: ${colors.firstDate};
    text-align: center;
    font: 1.5rem;
    font-weight: bold;
    padding: 10px 20px;
`;

export const Title = styled(Typography)`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 3.5rem;
    color: ${colors.draculaOrchid};
`;

export const IconContainer = styled.div`
    width: 32px;
    margin: 0 auto;
    padding: 20px 0;
`;