import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
`;

export const Logo = styled.div`
    height: 36px;
    display: flex;

    svg {
        width: auto;
        height: 100%;
    }

    h1 {
        margin: 0;
        font-size: 1.5rem;
        font-style: italic;
        font-weight: 300;
        color: white;
    }
`;