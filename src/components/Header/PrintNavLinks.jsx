import { NavLink } from "react-router-dom";

const PrintNavLinks = ({ links }) => {
    return (
        <>
            {links.map((item, id) => {
                return (
                    <NavLink
                        to={`/${item.route}`}
                        key={id}
                        className={({ isActive }) =>
                            `${
                                isActive ? "neomorphism-active" : ""
                            } py-2 px-4 neomorphism-shadow rounded-full text-highlight-color`
                        }
                    >
                        {item.title}
                    </NavLink>
                );
            })}
        </>
    );
};

export default PrintNavLinks;
