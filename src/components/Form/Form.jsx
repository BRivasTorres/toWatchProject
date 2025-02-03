import InputForm from "./InputForm"
import FormPrintSearch from "./FormPrintSearch";

const Form = ({category}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
   
    return (
        <form 
            className="grid grid-cols-1 relative"
            onSubmit={handleSubmit}
        >
            <InputForm category={category} />
            <FormPrintSearch category={category} />
        </form>
    )
}

export default Form
