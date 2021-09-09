import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    >.hiddenPad {
        border: none;
        width: 100%;
        height: 24px;
        
        &:active {
            box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
        }
    }
    
    > .pad { 
        >button{
            margin-bottom:0;
            background: #f4faff;
            font-weight: bolder;
            font-size: 20px;
            width: 20%;
            height: 64px;
            float: left;
            border: none;
            display: block;

            &:active {
                box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
                color:#00aeff;
            }
        }
    }
`;

export {Wrapper};