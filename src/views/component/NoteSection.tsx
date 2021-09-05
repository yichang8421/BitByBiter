import styled from "styled-components";
import React from "react";

const NoteSectionWrapper = styled.section`
    background: #f5f5f5;
    padding: 0 16px;
    margin-left: 10px;
    font-size: 14px;
    > label{
        display: flex;
        align-items: center;
        > span{
            margin-right: 16px;
            white-space: nowrap;
        }
        > input{
            display: block;
            width: 100%;
            height: 48px;
            background: none;
            border:none;
        }
    }
`;

const NoteSection = ()=>{
    return(
        <NoteSectionWrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="此处添加备注"/>
            </label>
        </NoteSectionWrapper>
    )
}

export default NoteSection;