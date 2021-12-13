import {
    StyledFooter,
    InnerFooter,
    Heart,
} from './Footer.styles';

export function Footer() {
    return(
        <StyledFooter>
            <InnerFooter>
                <p>Created by <a href='https://github.com/Mario-Duarte' target={"_blank"} rel='noreferrer'>Mario Duarte</a> with <Heart>&hearts;</Heart> and <span>&lt; /&gt;</span></p>
            </InnerFooter>
        </StyledFooter>
    )
}