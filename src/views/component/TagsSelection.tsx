import styled from "styled-components";
import Icon from "../../components/Icon";
import React from "react";
import img from "../../img/记账vue版.jpg";
import {NavLink} from "react-router-dom";
import {useTags} from "hooks/useTags";

const Wrapper = styled.section`
    background:#fff;
    //background-image:url(${img});
    //position: relative;
  //flex-grow: 1;
  //opacity: 0.5;
  //background-size: 70%;
  //background-repeat: no-repeat;
  //background-position: bottom 0px right 46px;
  //flex-direction: column-reverse;
    overflow-x: hidden;
    flex-grow: 1;
    > ol{
        margin:0 -12px;
        display: flex;
        flex-wrap: wrap;
        >li{
          &.selected{
            background: #ffba40;
            //border:1px solid red;
            box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
            border-radius: 20px;
          }
            
            text-align: center;
            display: flex;
            //flex-direction: column;
            //justify-content: center;
            align-items: center;
            font-family: inherit;
            font-size: 14px;
            font-weight: bolder;
            margin: 8px 8px;
            margin-left: 30px;
            margin-right: 20px;
            padding: 2px 4px;
        }
    }
`;

const Button = styled.button`
    //border:none;
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
    background: inherit;
    text-align: center;
    display: flex;
    align-items: center;
    font-family: inherit;
    font-size: 14px;
    font-weight: bolder;
    margin: 8px 8px;
    margin-left: 30px;
    margin-right: 20px;
    padding: 2px 4px;
`;

type Props = {
    hidePad: () => void;
    value: number[];
    onChange: (selected: number[]) => void;
}

const mapNameToIcon: Record<string, string> = {
    ["衣服"]: "cloth",
    ["吃饭"]: "eat",
    ["住房"]: "dwell",
    ["出行"]: "travel"
};

const TagsSelection: React.FC<Props> = (props: Props) => {
    const {tags, addTag} = useTags();
    const selectedTagIds = props.value;

    function onToggleTag(tagId: number) {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        } else {
            props.onChange([
                ...selectedTagIds,
                tagId
            ]);
        }
    }

    const getClass = (tagId: number) =>
        selectedTagIds.indexOf(tagId) >= 0 ?
            "selected" :
            "";

    return (
        <Wrapper>
            <ol>
                <NavLink to={"/edit"} activeClassName="selected">
                    <Button
                        onClick={() => {
                            props.hidePad();
                        }}
                    >
                        <Icon name={"edit"}/>
                        编辑
                    </Button>
                </NavLink>
                <Button
                    onClick={() => {
                        props.hidePad();
                        addTag();
                    }}
                >
                    <Icon name={"add"}/>
                    添加
                </Button>
                {
                    tags.map(tag => {
                        const mapIcon = mapNameToIcon[tag.name];
                        return (<li
                            key={tag.id}
                            onClick={() =>
                                onToggleTag(tag.id)
                            }
                            className={
                                [
                                    getClass(tag.id),
                                    mapIcon ? mapIcon : "others"
                                ].join(" ")
                            }
                        >
                            <Icon name={mapIcon ? mapIcon : "others"}/>
                            <span>{tag.name}</span>
                        </li>);
                    })
                }
            </ol>
        </Wrapper>
    );
};

export {TagsSelection};