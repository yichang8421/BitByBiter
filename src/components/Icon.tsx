import React from "react";
import classnames from "classnames";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context("icons", true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
    name?: string,
    fill?: string
} & React.SVGProps<SVGSVGElement>;

const Icon: React.FC<Props> = (props: Props) => {
    const {name, fill, className, children, ...rest} = props;
    return (
        <svg className={classnames("icon", className)} {...rest}>
            {props.name && <use xlinkHref={"#" + props.name}/>}
        </svg>
    );
};

export default Icon;