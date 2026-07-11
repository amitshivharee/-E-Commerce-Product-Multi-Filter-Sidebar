import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import SortDropdown from "./components/SortDropdown";
import ProductGrid from "./components/ProductGrid";
import NoProducts from "./components/NoProducts";
import products from "./data/products";

function App() {
  // Category State
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Price Range State
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 80000,
  });

  // Rating State
  const [minRating, setMinRating] = useState(0);

  // Sorting State
  const [sortBy, setSortBy] = useState("");

  // Temporary (for debugging)
  console.log(priceRange);

  const filteredProducts = products.filter((product) => {
  // Category Filter
  const categoryMatch =
    selectedCategories.length === 0 ||
    selectedCategories.includes(product.category);

  // Price Filter
  const priceMatch =
    product.price >= priceRange.min &&
    product.price <= priceRange.max;

  // Rating Filter
  const ratingMatch =
    product.rating >= minRating;

  return categoryMatch && priceMatch && ratingMatch;
});

const resetFilters = () => {
  setSelectedCategories([]);

  setPriceRange({
    min: 0,
    max: 80000,
  });

  setMinRating(0);

  setSortBy("");
};
  return (
    <div className="container">
      <Sidebar
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        minRating={minRating}
        setMinRating={setMinRating}
      />

      <div className="main-content">
        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
{
  filteredProducts.length > 0 ? (
    <ProductGrid products={filteredProducts} />
  ) : (
   <NoProducts resetFilters={resetFilters} />
  )
}
      </div>
    </div>
  );
}

export default App;