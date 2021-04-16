import styled from 'styled-components';

//header
/* ------------------------------------------ */

export const Limiter = styled.div`
        width: 100%;
        padding-top:60px;
        padding-left: 60px;
        padding-right: 60px;
    `;

export const Containerheader = styled.div`
    width: 100%; 
    height: 50px; 
    //border-bottom: 1px solid ${props => props.theme.tertiary};

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    //flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .containerlogo{
        width: 20%;
        margin-left: 20px;
    }

    .headerbody {
        width: 90%;

        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .logoheader {
        height:50px;
        width: 50px;
    }

    .itensheader {
    }

    .userheader {
        margin-right: 15px;
    }

    .navheader {
        //float: left;
        text-align:center;
		width:100%;

        ul {
            font-weight: bold;
            //text-shadow: none;
            margin-bottom: 20px;
            margin-left: 0;
            list-style: none;
            
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            
        }

        li {
            float: left;
        }

        a {
            cursor: pointer;
            display: block;

            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            border-radius: 20px;

            :hover {
                background-color: ${props => props.theme.contrast};
            }
        }
    }
    
    .contuserheader {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 100px;

        a {
            position: relative;
            display: inline-block;
        }
    }

    .userheader {
        height: 30px;
        width: 30px;
    }

    .dropheader {
        position:absolute;
        display:block;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-color: #fff;

        h1{
            font-size: 18px;
            margin: 15px;
        }

        p {
            height:1px;
            border: 1px solid black;
            margin: 20px;
            opacity: 20%;
        }

        a {
            color: black;
        }
    }
`;

//footer
/* ------------------------------------------ */


export const Containerfooter = styled.div`
    width: 100%; 
    height: 50px; 
    //border-bottom: 1px solid ${props => props.theme.tertiary};

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    //flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`;