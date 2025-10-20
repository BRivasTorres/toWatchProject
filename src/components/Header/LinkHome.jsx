import { NavLink } from "react-router-dom";

const LinkHome = () => {
    return (
        <>
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                    `${
                        isActive ? "bg-accent-color" : ""
                    } uppercase py-2 px-4 rounded-full text-highlight-color`
                }
            >
				Home
            </NavLink>
        </>
    );
}

export default LinkHome
