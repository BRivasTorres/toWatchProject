import Form from "../components/Form/Form"
import Titles from "../components/Titles/Titles"

const Series = () => {
    const pageCategory = "series"
    
    return (
        <div>
            <Form category={pageCategory} />
            <Titles category={pageCategory} />
        </div>
    )
}

export default Series
