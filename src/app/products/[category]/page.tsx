import { Category } from "@/types/category.type";

type CategoryPageProps = {
  params: { category: Category };
};
function CategoryPage({ params: { category } }: CategoryPageProps) {
  return (
    <div>
      This is the CategoryPage
      <br /> {category.toLowerCase()}
    </div>
  );
}

export default CategoryPage;
