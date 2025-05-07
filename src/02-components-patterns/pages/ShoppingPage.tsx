import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
  id: "123",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export function ShoppingPage() {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Cafe" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}
