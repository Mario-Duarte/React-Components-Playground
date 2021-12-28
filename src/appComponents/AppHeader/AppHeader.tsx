import {
    HeaderContainer,
    Logo,
} from './AppHeader.styles';

export interface AppHeaderProps {
    title: string;
    logo: JSX.Element;
}

export function AppHeader({title, logo}:AppHeaderProps) {
    return(
        <HeaderContainer>
            <Logo>{logo} <h1>{title}</h1></Logo>
        </HeaderContainer>
    );
}