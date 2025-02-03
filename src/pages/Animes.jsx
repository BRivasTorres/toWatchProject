import Form from "../components/Form/Form"
import Titles from "../components/Titles/Titles"

const Animes = () => {
    const pageCategory = "animes"
    
    return (
        <div>
            <Form category={pageCategory} />
            <Titles category={pageCategory} />      
        </div>
    )
}

export default Animes
