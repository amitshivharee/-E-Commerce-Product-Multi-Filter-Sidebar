function SortDropdown({ sortBy, setSortBy, count }) {
  return (
    <div className="sort-container">
      <span className="results-count"><strong>{count}</strong> {count === 1 ? "item" : "items"} found</span>
      <div className="sort-control">
        <label htmlFor="sort-products">Sort by</label>
      <select
        id="sort-products"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Sort By</option>

        <option value="priceLowHigh">
          Price: Low to High
        </option>

        <option value="priceHighLow">
          Price: High to Low
        </option>

        <option value="topRated">
          Top Rated First
        </option>
      </select>
      </div>
    </div>
  );
}

export default SortDropdown;
