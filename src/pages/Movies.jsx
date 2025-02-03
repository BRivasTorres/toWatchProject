import Form from "../components/Form/Form"
import Titles from "../components/Titles/Titles"

const Movies = () => {
    const pageCategory = "movies"
    
    return (
        <div>
            <Form category={pageCategory} />
            <Titles category={pageCategory} />
        </div>
    )
}

export default Movies
