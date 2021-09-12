import React from "react";
import Layout from "../components/Layout";
import {useTags} from "useTags";

const Edit = () => {
    const {tags, setTags} = useTags();
    return (
        <Layout>
            <h2>Edit</h2>
        </Layout>
    );
};

export {Edit};