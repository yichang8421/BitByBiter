import {useState} from "react";
import {createId} from "lib/createId";

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([
        {id: createId(), name: "衣服"},
        {id: createId(), name: "吃饭"},
        {id: createId(), name: "住房"},
        {id: createId(), name: "出行"}
    ]);
    return {tags, setTags};
};

export {useTags};