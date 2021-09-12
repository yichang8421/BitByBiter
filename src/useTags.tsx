import {useState} from "react";

const useTags = () => {
    const [tags, setTags] = useState<string[]>(["衣服", "吃饭", "住房", "出行"]);
    return {tags, setTags};
};

export {useTags};