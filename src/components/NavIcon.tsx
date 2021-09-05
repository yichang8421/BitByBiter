import React, {useMemo} from "react";
import {NavLink, useLocation} from "react-router-dom";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
    console.log(error);
}

type Props = {
    pathname: string;
    name: string;
    defaultIcon: string;
    selectedIcon: string
}

const Icon = (props: Props) => {
    const location = useLocation();

    // @ts-ignore
    const defaultIconId = props.defaultIcon["id"];
    // @ts-ignore
    const selectedIconId = props.selectedIcon["id"];

    const selected = useMemo(() => {
        return location.pathname.startsWith(props.pathname);
    }, [props.pathname, location.pathname]);

    return (
        <NavLink to={props.pathname} activeClassName="selected">
            <svg className="icon">
                <use
                    xlinkHref={selected ? `#${selectedIconId}` : `#${defaultIconId}`}
                />
            </svg>
            {props.name}
        </NavLink>
    );
};
export default Icon;