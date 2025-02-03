import ImageFiller from "react-image-filler";

const ImageHangler = ({ imageSrc, displayName }) => {
    return (
        <div>
            {imageSrc !== undefined ? (
                <img
                    src={`${imageSrc}`}
                    alt={`Poster of ${displayName}`}
                    className="w-[100px] h-[100px] rounded-xl"
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
};

export default ImageHangler;
