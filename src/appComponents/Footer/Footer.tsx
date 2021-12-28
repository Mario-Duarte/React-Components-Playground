import {
    StyledFooter,
    InnerFooter,
    Heart,
} from './Footer.styles';

export function Footer() {
    const year = new Date().getFullYear();
    return(
        <StyledFooter>
            <InnerFooter>
                <p>Created by <a href='https://www.marioduarte.co.uk/' target={"_blank"} rel='noreferrer'>Mario Duarte</a> with <span>&lt;code/&gt;</span> and <Heart>&hearts;</Heart></p>
                <p>&copy; All rights reserved {year}</p>
            </InnerFooter>
        </StyledFooter>
    )
}