import React from "react";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
    name: string,
    fill?: string
}

export default (props: Props) => {
    return (
        <svg className="icon" fill={props.fill}>
            <use xlinkHref={"#" + props.name}/>
        </svg>
    );
};

// export default Icon;