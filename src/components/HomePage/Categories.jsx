import { NavLink } from "react-router-dom";
import categories from "../../mock/categories";

const Categories = () => {
    return (
        <section className="w-[60%]  mx-auto grid grid-cols-1 gap-4">
            {categories.map((item, id) => {
                return (
                    <NavLink
                        to={`/${item.route}`}
                        key={id}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        <img
                            src={item.imgSrc}
                            alt={item.title}
                            className="w-[100%] h-[250px]"
                        />
                        <h3 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-semibold w-[70%] h-[70%] text-[1rem] text-white text-center capitalize">
                            {item.title}
                            {/* //TODO: probablemente aqui vaya lo siguiente:
								favoritas, vistas y por ver. */}
                        </h3>
                    </NavLink>
                );
            })}
        </section>
    );
};

export default Categories;
