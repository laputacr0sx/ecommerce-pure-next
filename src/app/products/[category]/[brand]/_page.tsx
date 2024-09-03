import { Brand } from "@/types/brand.type";

type BrandPageProps = { params: { brand: Brand } };

function BrandPage({ params: { brand } }: BrandPageProps) {
  return (
    <div>
      This is the BrandPage
      <br />
      {brand}
    </div>
  );
}

export default BrandPage;
