import styled from 'styled-components';

export const HeaderWrapper = styled.header`
width: 100%;
max-width: 640px;
padding: 8px 24px;
margin: 0 auto 24px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
z-index: 1;
top: 0;
left: 0;
`

export const HeaderLogo = styled.a`
    color: inherit;
    text-decoration: none;
    font-size: 1.2rem;
    cursor: pointer;
`

export const HeaderNav = styled.nav`
    display: flex;
    gap: 8px;
`

export const HeaderLink = styled.a`
    color: inherit;
    text-decoration: none;
    font-size: 1.2rem;
    cursor: pointer;
`