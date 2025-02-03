const DetailsOverview = ({overview}) => {
    return (
        <>
			<span className="font-semibold ">Overview: </span>
            <p className="italic">
                {overview}
            </p>
        </>
    );
}

export default DetailsOverview
