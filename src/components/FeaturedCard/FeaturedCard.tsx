import { colors } from "../../theme/colors";
import {
    CardActionArea,
    Typography,
} from "@mui/material";
import { CircleIcon } from "components/CircleIcon";
import {
    StyledCard,
    StyledCardContent,
    StyledCardMedia,
    Featured,
    Title,
    IconContainer,
} from './FeaturedCard.styles';

export interface FeaturedCardProps {
    title: JSX.Element | string | undefined;
    description: string | undefined;
    featuredImg: string;
}

export function FeaturedCard({title, description, featuredImg}:FeaturedCardProps) {
    return (
        <StyledCard sx={{ maxWidth: 400 }}>
            <CardActionArea>
                <StyledCardMedia background={featuredImg}/>
                <StyledCardContent>
                    <Featured>Featured</Featured>
                    <Title variant="h1">
                        {title}
                    </Title>
                    <IconContainer>
                        <CircleIcon color={colors.firstDate} />
                    </IconContainer>
                    <Typography align="center" lineHeight={"2.2"} fontStyle={"lighter"}>
                        {description}
                    </Typography>
                </StyledCardContent>
            </CardActionArea>
        </StyledCard>
    );
}