import { Brand } from "@/types/brand.type";
import { Category } from "@/types/category.type";

type ProductPageProps = {
  params: { category: Category; brand: Brand; product: string };
};
function ProductList({ params }: ProductPageProps) {
  const { product, category, brand } = params;

  return (
    <div>
      This is Product List Page
      <br />
      {category}
      <br />
      {brand}
      <br />
      {product}
    </div>
  );
}

export default ProductList;
