import styled from "styled-components";
import Icon from "../../components/Icon";
import React, {useState} from "react";
import img from "../../img/记账vue版.jpg";

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
            padding: 3px 18px;
            font-family: inherit;
            font-size: 14px;
            font-weight: bolder;
            margin: 8px 8px;
            margin-left: 30px;
            margin-right: 20px;
            padding: 2px 4px;
        }
        
        > .addBtn{
            //border:none;
            border-radius: 20px;
            box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
            background: inherit;
            text-align: center;
            display: flex;
            align-items: center;
            padding: 6px 18px;
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

type Props = {
    hidePad: () => void
}

const TagsSelection: React.FC<Props> = (Props: Props) => {
    const [tags, setTags] = useState<string[]>(["衣服", "吃饭", "住房", "出行"]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    function onAddTag() {
        const addTagName = window.prompt("请输入添加标签名");
        if (addTagName) {
            setTags(() => [
                ...tags,
                addTagName
            ]);
        }
    }

    function onToggleTag(tag: string) {
        const index = selectedTags.indexOf(tag);
        if (index >= 0) {
            setSelectedTags(() =>
                selectedTags.filter(t => t !== tag)
            );
        } else {
            setSelectedTags(() => [
                ...selectedTags,
                tag
            ]);
        }
    }

    const getClass = (tag: string) =>
        selectedTags.indexOf(tag) >= 0 ?
            "selected" :
            "";

    return (
        <Wrapper>
            <ol>
                <button
                    onClick={() => {
                        Props.hidePad();
                        onAddTag();
                    }}
                    className="selected addBtn"
                >
                    <Icon name={"add"}/>
                    添加
                </button>
                {
                    tags.map(tag => {
                            const mapNameToIcon: Record<string, string> = {
                                "衣服": "cloth",
                                "吃饭": "eat",
                                "住房": "dwell",
                                "出行": "travel"
                            };
                            const mapIcon = mapNameToIcon[tag];
                            return (<li
                                key={tag}
                                onClick={() =>
                                    onToggleTag(tag)
                                }
                                className={
                                    [
                                        getClass(tag),
                                        mapIcon ? mapIcon : "others"
                                    ].join(" ")
                                }
                            >
                                <Icon name={mapIcon ? mapIcon : "others"}/>
                                <span>{tag}</span>
                            </li>);
                        }
                    )
                }
            </ol>
        </Wrapper>
    );
};

export {TagsSelection};