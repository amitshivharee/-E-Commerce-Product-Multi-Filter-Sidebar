function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div className="sort-container">
      <select
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
  );
}

export default SortDropdown;