function NoProducts({ resetFilters }) {
  return (
    <div className="no-products">

      <h2>No items match your criteria.</h2>

      <p>Try broadening your filters to see more of the collection.</p>

      <button className="reset-button" onClick={resetFilters}>
        Reset Filters
      </button>

    </div>
  );
}

export default NoProducts;
