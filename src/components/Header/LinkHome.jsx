import { NavLink } from "react-router-dom";

const LinkHome = () => {
    return (
        <>
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                    `${
                        isActive ? "neomorphism-active" : ""
                    } uppercase py-2 px-4 neomorphism-shadow rounded-full`
                }
            >
				Home
            </NavLink>
        </>
    );
}

export default LinkHome
