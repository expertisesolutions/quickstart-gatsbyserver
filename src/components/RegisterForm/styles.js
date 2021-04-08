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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;

    .boxLogin { 
        width: 560px;
        background: ${props => props.theme.background};
        border-radius: 10px;
        position: relative;

        padding-left: 85px;
        padding-right: 85px;
        padding-top: 55px;
        padding-bottom: 20px
    }

`;

export const FormLogin = styled.form`

    width: 100%;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    flex-wrap: wrap;

    .titlelogin {
        font-size: ${props => props.theme.fontTitle};
        color: ${props => props.theme.fontEmphasis};
        line-height: 1.2;
        text-transform: uppercase;
        text-align: left;

        width: 100%;
        display: block;
        padding-bottom: 32px;
    };

    .captionlogin {
        font-size: ${props => props.theme.fontSmall};
        color: ${props => props.theme.fontEmphasis};
        line-height: 1.4;
        padding-bottom: 0px;
    };

    .captionlogin-2 {
        font-size: ${props => props.theme.fontSmall};
        color: red;
        line-height: 1.4;
        padding-bottom: 0px;
    }

    .conteinerbuttonlogin {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: space-between;

        margin-top: 40px;
    };

    .flexLogin {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: space-between;
        -ms-align-items: center;
        padding-bottom: 48px;
    }

    .remember {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    label {
        font-size: ${props => props.theme.fontSmall};
        color:  ${props => props.theme.fontSecondary};
        line-height: 1.4;

        display: block;
        position: relative;
        padding-left: 26px;
        cursor: pointer;
    };

    a {
        font-size: ${props => props.theme.fontSmall};
        color: ${props => props.theme.fontSecondary};
        line-height: 1.4;
        text-decoration:none; 

        -webkit-transition: all 0.2s;
        -o-transition: all 0.2s;
        -moz-transition: all 0.2s;
        transition: all 0.2s;

        :hover {
           text-decoration:underline;
           font-size: ${props => props.theme.fontMedium};
        };
    }

    button {
        font-size: ${props => props.theme.fontMedium};
        color: ${props => props.theme.fontContrast};
        line-height: 1.2;

        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        min-width: 150px;
        height: 40px;
        background-color: ${props => props.theme.secondary};
        border-radius: 10px;

        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;

        
        :hover {
            border: 0px;
            background-color: ${props => props.theme.focus};
        };

        :disabled {
            background-color: red;
            opacity: 20%;
            background-color: ${props => props.theme.secondary};
        }
    };

`;



export const InputLogin = styled.div`
    width: 100%;
    position: relative;
    background-color: ${props => props.theme.background};
    border-bottom: 1px solid ${props => props.theme.borderPrimay};
    border-radius: 2px;

    margin-bottom: 12px;


    input {
        color:  solid ${props => props.theme.fontEmphasis};
        line-height: 1.2;
        font-size: solid ${props => props.theme.fontBig};

        display: block;
        width: 100%;
        background: transparent;
        height: 45px;
        border: 0px;
        padding: 0 25px 0 25px;
    };

    .focuslogin {
        position: absolute;
        display: block;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        top: -1px;
        left: -1px;
        pointer-events: none;
        border: 1px solid ${props => props.theme.focus};
        border-radius: 4px;

        visibility: hidden;
        opacity: 0;

        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;

    }; 

`;
