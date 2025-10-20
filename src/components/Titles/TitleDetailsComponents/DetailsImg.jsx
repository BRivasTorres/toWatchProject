import ImageFiller from "react-image-filler";

const DetailsImg = ({imgUrl, item}) => {
    return (
        <div className="flex justify-center m-4">
            {imgUrl ? (
                <img
                    src={`${imgUrl}`}
                    alt={`Poster of ${item.title}`}
                    className="w-[80%] max-w-[250px] h-[200px] rounded-xl"
                />
            ) : (
                <ImageFiller
                    width={100}
                    height={100}
                    background="#DEF9C4"
                    color="#50B498"
                    text="NO IMAGE FOUND"
                />
            )}
        </div>
    );
}

export default DetailsImg
