import ProductCard from "./product-card";
import { Product } from "@/types";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  if (!data || data.length === 0) {
    return (
      <div className="my-10">
        <h2 className="h2-bold mb-4">{title}</h2>
        <p className="text-gray-500">No products available</p>
      </div>
    );
  }
  return (
    <div className="flex-1 wrapper">
      <h2 className="h2-bold mb-4">{title}</h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {limitedData.map((product: Product) => (
            <div key={product.name} className="border p-4 rounded-lg">
              <ProductCard key={product.slug} product={product} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products available</p>
      )}
    </div>
  );
};

export default ProductList;
