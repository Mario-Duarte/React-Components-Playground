import { colors } from 'theme/colors';
import { AppHeader } from 'appComponents/AppHeader';
import { RocketLogo } from 'appComponents/Logo';
import { Typography } from '@mui/material';
import {
    HeroContainer,
    HeroInner,
    Content,
    Title,
} from './AppHero.styles';

export interface AppHeroProps {

}

export function AppHero({

}:AppHeroProps) {
    return(
        <HeroContainer>
            <HeroInner>
                <AppHeader title={'CP - local playground'} logo={<RocketLogo/>} />
                <Content>
                    <Title>Components Playground</Title>
                    <Typography color={colors.cityLights} align='center' lineHeight={1.8} fontWeight={500}>
                        Your safe place to create react components in isolation from a big project.<br/>
                        To start open this project in your favorite code editor and read thru the <span>Readme.md</span> file to find out more about <a href='https://github.com/Mario-Duarte/Storybooks-playground' target={"_blank"} rel='noreferrer'>this project</a>. To start StoryBooks you can run <span>yarn storybook</span> and <span>yarn test</span> to run the test scripts.<br/>
                        Have you found a bug/issue? <a href='https://github.com/Mario-Duarte/Storybooks-playground/issues' target={"_blank"} rel='noreferrer'>Report it here</a>.
                    </Typography>
                </Content>
            </HeroInner>
        </HeroContainer>
    );
}