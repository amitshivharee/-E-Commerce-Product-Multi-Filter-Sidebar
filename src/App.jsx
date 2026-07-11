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

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "priceLowHigh") return a.price - b.price;
    if (sortBy === "priceHighLow") return b.price - a.price;
    if (sortBy === "topRated") return b.rating - a.rating;
    return 0;
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
    <>
      <header className="store-header">
        <div className="brand"><span className="brand-mark">S</span>Selected</div>
        <span className="header-note">Thoughtful finds, chosen for you</span>
      </header>
      <div className="container">
        <Sidebar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minRating={minRating}
          setMinRating={setMinRating}
        />

        <main className="main-content">
          <div className="catalogue-intro">
            <p className="eyebrow">Curated collection</p>
            <h1>Find your next favourite.</h1>
            <p>Explore everyday essentials and standout pieces.</p>
          </div>
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} count={sortedProducts.length} />
          {sortedProducts.length > 0 ? (
            <ProductGrid products={sortedProducts} />
          ) : (
            <NoProducts resetFilters={resetFilters} />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
