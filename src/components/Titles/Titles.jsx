import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef } from "react"
import TextAreaTitle from "./TextAreaTitle"
import InputTitle from "./InputTitle"
import ButtonsTitle from "./ButtonsTitle"
import TitleDetails from "./TitleDetails"
import { motion } from "framer-motion"
import { fetchData } from "../../redux/fetchData/fetchDataActions"

const Titles = ({category}) => {
    const titles = useSelector((state) => state.form[category]) 
    const dispatch = useDispatch()
    const inputRefs = useRef([]);
    
    const autoResizeTextarea = (textarea) => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight - 6}px`;
    };
    
    useEffect(() => {
        if (Array.isArray(titles) && titles.length > 0) {
            titles.forEach((item) => {
                const textarea = inputRefs.current[item.id];
                if (textarea) {
                    autoResizeTextarea(textarea);
                }
            });
        }        
    }, [titles]);

    useEffect(() => {
        if(!titles || titles.length === 0) {
            dispatch(fetchData(category));
        }        
    }, [category, dispatch, titles]);
    
    return (
        <div className="sm:mt-4 flex flex-col gap-4 ">
            {titles && titles.length > 0 ? (
                titles.map((item, id) => (
                    <ul key={id}>
                        <li
                            className={`text-highlight-color neomorphism-shadow flex  items-center justify-center px-8 py-4 flex-col transition-all duration-300 ease-linear`}
                            style={{
                                borderRadius: item.showTitleDetails
                                    ? "0.75rem"
                                    : "100px",
                                opacity: item.isWatched 
                                    ? ".45"
                                    : "1"
                            }}
                        >
                            <section className="flex justify-between items-center">
                                <InputTitle 
                                    item={item}
                                    category={category}
                                />
                                <TextAreaTitle
                                    item={item}
                                    category={category}
                                    inputRefs={inputRefs}
                                />
                                <ButtonsTitle
                                    item={item}
                                    category={category}
                                    inputRefs={inputRefs}
                                />
                            </section>
                            <section className="pt-6">
                                {item.showTitleDetails && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "linear",
                                        }}
                                    >
                                        <TitleDetails
                                            category={category}
                                            item={item}
                                        />
                                    </motion.div>
                                )}
                            </section>
                        </li>
                    </ul>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default Titles
