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
    <div className="sidebar">

      <h2>Filters</h2>

      <h3>Category</h3>

      {categories.map((category) => (
        <div key={category}>
          <label>

            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />

            {category}

          </label>
        </div>
      ))}

      <h3>Price</h3>
      

<p>Min: ₹{priceRange.min}</p>

<input
  type="range"
  min="0"
  max="80000"
  step="500"
  value={priceRange.min}
  onChange={(e) =>
    setPriceRange({
      ...priceRange,
      min: Number(e.target.value),
    })
  }
/>

<p>Max: ₹{priceRange.max}</p>

<input
  type="range"
  min="0"
  max="80000"
  step="500"
  value={priceRange.max}
  onChange={(e) =>
    setPriceRange({
      ...priceRange,
      max: Number(e.target.value),
    })
  }
/>

      <h3>Rating</h3>
      

<label>
  <input
    type="radio"
    name="rating"
    value="0"
    checked={minRating === 0}
    onChange={() => setMinRating(0)}
  />
  All Ratings
</label>

<br />

<label>
  <input
    type="radio"
    name="rating"
    value="1"
    checked={minRating === 1}
    onChange={() => setMinRating(1)}
  />
  1 ★ & Up
</label>

<br />

<label>
  <input
    type="radio"
    name="rating"
    value="2"
    checked={minRating === 2}
    onChange={() => setMinRating(2)}
  />
  2 ★ & Up
</label>

<br />

<label>
  <input
    type="radio"
    name="rating"
    value="3"
    checked={minRating === 3}
    onChange={() => setMinRating(3)}
  />
  3 ★ & Up
</label>

<br />

<label>
  <input
    type="radio"
    name="rating"
    value="4"
    checked={minRating === 4}
    onChange={() => setMinRating(4)}
  />
  4 ★ & Up
</label>

<br />

<label>
  <input
    type="radio"
    name="rating"
    value="5"
    checked={minRating === 5}
    onChange={() => setMinRating(5)}
  />
  5 ★
</label>

    </div>
  );
}

export default Sidebar;