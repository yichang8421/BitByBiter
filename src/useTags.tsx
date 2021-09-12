import {useState} from "react";
import {createId} from "lib/createId";

const defaultTags = [
    {id: createId(), name: "衣服"},
    {id: createId(), name: "吃饭"},
    {id: createId(), name: "住房"},
    {id: createId(), name: "出行"}
];

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
    return {tags, setTags};
};

export {useTags};