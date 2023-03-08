import Pet from "./Pet";

const Results = ({ pets, setRequestParams, requestParams }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
      <div className="pagination">
        {/* Next page button */}
        <button
          onClick={() =>
            setRequestParams((prevParams) => ({
              ...prevParams,
              page: prevParams.page + 1,
            }))
          }
          disabled={pets.length < 9}
        >
          Next Page
        </button>
        {/* Previous page button */}
        <button
          onClick={() =>
            setRequestParams((prevParams) => ({
              ...prevParams,
              page: prevParams.page - 1,
            }))
          }
          disabled={requestParams.page === 0}
        >
          Previous Page
        </button>
      </div>
    </div>
  );
};

export default Results;
