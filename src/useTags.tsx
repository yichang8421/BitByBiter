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

    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];

    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    };

    const updateTag = (id: number, obj: { name: string }) => {
        const index = findTagIndex(id);
        const tagsClone = JSON.parse(JSON.stringify(tags));
        tagsClone.splice(index, 1, {id: id, name: obj.name});
        // splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。
        setTags(tagsClone);
    };

    return {tags, setTags, findTag, findTagIndex, updateTag};
};

export {useTags};