import Categories from "../components/HomePage/Categories";
import TextDescription from "../components/HomePage/TextDescription";

const Home = () => {
    return (
        <div className="grid place-content-center gap-8">
            <TextDescription />
            <Categories />
        </div>
    );
};

export default Home;
