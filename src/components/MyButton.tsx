import styled from "styled-components";

const Button = styled.button`
    color:#2a9e78;
    font-size: 16px;
    font-weight: bolder;
    border: 1px solid #2a9e78;
    padding: 8px 12px;
    background: #f4faff;
    border-radius: 10px;
    &:active {
        box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
        color:#00aeff;
        background: #d9efff;
    }
`;

export {Button};