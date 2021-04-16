import styled from 'styled-components';

export const Limiter = styled.div`
        width: 100%;
        margin: 0 auto;
        background-color: ${props => props.theme.primary};
    `;

export const Container = styled.div`
    width: 100%;  
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    //flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    padding: 15px;

`;