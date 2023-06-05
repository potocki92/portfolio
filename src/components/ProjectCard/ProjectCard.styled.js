import styled from 'styled-components';

export const ProjectCardStyled = styled.div`
    margin-bottom: 16px;
    display: flex;
    color: inherit;
    text-decoration: none;
    flex-direction: column;
    gap: 16px;

    @media screen and (min-width: 40em) {
        flex-direction: row;
    }
`

export const ProjectCardImg = styled.img`
    max-width: 100%;
    min-width: 336px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0px;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-property: box-shadow, transform;
    height: 176px;
`

export const ProjectCardContent = styled.div`
    margin-bottom: 16px;
    display: flex;
    color: inherit;
    text-decoration: none;
    flex-direction: column;
    gap: 16px;

    
`
export const ProjectCardTitle = styled.h3`
    font-weight: 500;
}
`

export const ProjectCardDescription = styled.p`
    font-size: 1.2rem;

    @media screen and (min-width: 40em) {
        font-size: 1rem;
    }
`