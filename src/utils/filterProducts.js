const filteredProducts = products
  .filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const priceMatch =
      product.price >= priceRange.min &&
      product.price <= priceRange.max;

    const ratingMatch =
      product.rating >= minRating;

    return categoryMatch && priceMatch && ratingMatch;
  })
  .sort((a, b) => {

    if (sortBy === "priceLowHigh") {
      return a.price - b.price;
    }

    if (sortBy === "priceHighLow") {
      return b.price - a.price;
    }

    if (sortBy === "topRated") {
      return b.rating - a.rating;
    }

    return 0;
  });