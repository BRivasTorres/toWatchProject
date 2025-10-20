const DetailsGenres = ({genres}) => {
    return (
        <div className="flex gap-3 mt-2 items-center">
            <h2 className="font-semibold">Genres:</h2>
            <ul className="w-full flex flex-wrap gap-2">
                {genres.map((item, id) => {
                    return (
                        <li
                            className="bg-main-color py-2 px-4 rounded-full text-center w-fit text-highlight-color"
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
