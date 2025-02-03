import categories from "../../mock/categories";
import PrintNavLinks from "./PrintNavLinks";
import LinkHome from "./LinkHome";

const NavMobile = () => {
    return (
        <section className="font-semibold sm:hidden min-w-[300px]">
            <div className="flex justify-center flex-wrap gap-6 bg-main-color py-8 ">
                <LinkHome />
                <PrintNavLinks links={categories} />
            </div>
        </section>
    );
};

export default NavMobile;
