function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="category-tag">{product.category}</span>
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <div className="product-meta">
          <span className="product-price">₹{product.price.toLocaleString("en-IN")}</span>
          <span className="rating"><span className="rating-star">★</span>{product.rating}.0</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
