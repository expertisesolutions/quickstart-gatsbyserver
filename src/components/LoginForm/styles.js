import styled from 'styled-components';

export const Limiter = styled.div`
        width: 100%;
        margin: 0 auto;
    `;

export const Container = styled.div`
    width: 100%;  
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    
    background-color: ${props => props.theme.primary};
    

    .boxLogin { 
        width: 560px;
        background: ${props => props.theme.background};
        border-radius: 10px;
        position: relative;
    }

`;

export const FormLogin = styled.div`
    width: 100%;

    .titlelogin {
        font-size: ${props => props.theme.fontTitle};
        color: ${props => props.theme.fontEmphasis};
        line-height: 1.2;
        text-transform: uppercase;
        text-align: left;

        width: 100%;
        display: block;
    }
`;
