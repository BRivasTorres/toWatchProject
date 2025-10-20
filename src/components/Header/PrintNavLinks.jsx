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
                                isActive ? "bg-accent-color" : ""
                            } py-2 px-4 rounded-full text-highlight-color capitalize`
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
