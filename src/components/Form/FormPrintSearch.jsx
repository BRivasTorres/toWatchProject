import PrintNoData from "./PrintNoData";
import PrintSearch from "./PrintSearch";
import { useSelector } from "react-redux";

const FormPrintSearch = ({category}) => {
    
    const input = useSelector(state => state.input.inputs[category] || "")
    const data = useSelector(state => state.fetchData.data[category] || "")
    
    return (
        <div className="flex flex-col items-center w-[100%] gap-4 absolute z-10 top-16 rounded-2xl  mt-4 ">
            {input.length > 0 && data.length === 0 ? (
                <PrintNoData />
            ) : (
                (data.length > 0 && input.length > 0) &&  <PrintSearch category={category} data={data} />
            )}
        </div>
    );
}

export default FormPrintSearch
