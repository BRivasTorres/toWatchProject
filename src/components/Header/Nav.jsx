import categories from "../../mock/categories";
import PrintNavLinks from "./PrintNavLinks";
import LinkHome from "./LinkHome";

const Nav = () => {
    return (
        <section className="hidden sm:flex flex-col font-semibold pl-4 py-4 sticky top-0 gap-[2rem]">
            <LinkHome />
            <div className="flex flex-col gap-[1rem] ">
                <PrintNavLinks links={categories} />
            </div>
        </section>
    );
};

export default Nav;
