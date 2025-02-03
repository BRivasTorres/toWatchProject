import { useDispatch } from "react-redux";
import { updateTitle } from "../../redux/form/formActions";

const TextAreaTitle = ({item, category, inputRefs}) => {    
    const dispacth = useDispatch();    
    const handleUpdateTitle = (id, value) => {
        dispacth(updateTitle(id, value, category));
    };
    
    return (
        <>
            <textarea
                type="text"
                readOnly={item.isReadOnly}
                value={item.name || item.title || ""}
                onChange={(e) => handleUpdateTitle(item.id, e.target.value)}
                rows={1}
                className={`bg-transparent outline-highlight-color rounded-lg w-[60%] resize-none p-2 overflow-hidden ${item.isWatched ? "line-through" : ""} `}
                ref={(el) => (inputRefs.current[item.id] = el)}
            />
        </>
    );
}

export default TextAreaTitle
