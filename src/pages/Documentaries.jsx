import Form from "../components/Form/Form";
import Titles from "../components/Titles/Titles";

const Documentaries = () => {
    const pageCategory = "documentaries"
    return (
        <div>
            <Form category={pageCategory} />
            <Titles category={pageCategory} />
        </div>
    );
}

export default Documentaries
