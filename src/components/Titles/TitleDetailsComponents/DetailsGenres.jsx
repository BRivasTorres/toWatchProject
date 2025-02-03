const DetailsGenres = ({genres}) => {
    return (
        <div className="flex gap-3 mt-2">
            <h2 className="font-semibold">Genres:</h2>
            <ul className="w-full flex flex-wrap gap-2">
                {genres.map((item, id) => {
                    return (
                        <li
                            className="bg-main-color p-2 rounded-full text-center w-fit"
                            key={id}
                        >
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default DetailsGenres
