export function ProductCard({ product }) {
  return (
    <article className="card product-card">
      <div className="card-image-wrapper">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="card-image"
          loading="lazy"
        />
        <span className="card-badge">{product.category}</span>
      </div>

      <div className="card-body">
        <h3 className="card-title" title={product.title}>
          {product.title}
        </h3>
        <p className="card-description">{product.description}</p>

        <div className="card-footer">
          <div className="card-price-container">
            <span className="card-price">${product.price.toFixed(2)}</span>
            {product.discountPercentage && (
              <span className="discount-tag">-{Math.round(product.discountPercentage)}%</span>
            )}
          </div>
          {product.rating && (
            <span className="rating-pill">⭐ {product.rating.toFixed(1)}</span>
          )}
        </div>
      </div>
    </article>
  );
}
