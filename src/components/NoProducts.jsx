function NoProducts({ resetFilters }) {
  return (
    <div className="no-products">

      <h2>No items match your criteria.</h2>

      <button onClick={resetFilters}>
        Reset Filters
      </button>

    </div>
  );
}

export default NoProducts;