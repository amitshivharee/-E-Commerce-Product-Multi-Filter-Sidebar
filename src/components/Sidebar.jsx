const categories = [
  "Electronics",
  "Apparel",
  "Footwear",
];

function Sidebar({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
}) {

  const handleCategoryChange = (category) => {

    if (selectedCategories.includes(category)) {

      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );

    } else {

      setSelectedCategories([
        ...selectedCategories,
        category,
      ]);

    }

  };

  return (
    <aside className="sidebar">
      <div className="filter-heading">
        <h2>Filters</h2>
        <span>Refine results</span>
      </div>
      <section className="filter-group">
      <h3>Category</h3>
      <div className="filter-options">
      {categories.map((category) => (
        <div key={category}>
          <label className="filter-option">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />

            <span>{category}</span>
          </label>
        </div>
      ))}
      </div>
      </section>
      <section className="filter-group">
      <h3>Price</h3>
      <div className="price-labels"><span>From <strong>₹{priceRange.min.toLocaleString("en-IN")}</strong></span><span>To <strong>₹{priceRange.max.toLocaleString("en-IN")}</strong></span></div>
<input className="range-input"
  type="range"
  min="0"
  max="80000"
  step="500"
  value={priceRange.min}
  onChange={(e) =>
  setPriceRange({
    ...priceRange,
    min: Math.min(Number(e.target.value), priceRange.max),
  })
}
/>

<input className="range-input"
  type="range"
  min="0"
  max="80000"
  step="500"
  value={priceRange.max}
  onChange={(e) =>
  setPriceRange({
    ...priceRange,
    max: Math.max(Number(e.target.value), priceRange.min),
  })
}
/>
      </section>
      <section className="filter-group">
      <h3>Rating</h3>
      {[0, 1, 2, 3, 4, 5].map((rating) => (
<label className="filter-option" key={rating}>
  <input
    type="radio"
    name="rating"
    value={rating}
    checked={minRating === rating}
    onChange={() => setMinRating(rating)}
  />
  {rating === 0 ? "All ratings" : `${rating} ★ & up`}
</label>
      ))}
      </section>
    </aside>
  );
}

export default Sidebar;
