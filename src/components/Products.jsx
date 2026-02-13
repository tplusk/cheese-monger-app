import { productList } from "../data/productList";

export default function Products() {
  return (
    <div>
      <h2 id="subNav">Product Line</h2>
      <ul className="productType">
        {productList.map((category, index) => (
          <div key={index}>
            <h3>{category.productType}</h3>
            <div>
              <ul className="productTypeProd">
                {category.products.map((product, productIndex) => (
                  <ul key={productIndex}>{product}</ul>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
