import ProductList from "@/components/ui/shared/product/product-list";
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const metadata = {
  title: "Home",
  description: "Welcome to the Pro Store ME home page",
};

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  await delay(300); // Simulate a loading delay
  return (
    <>
      <ProductList
        // data={sampleData.products}
        data={latestProducts}
        title="Newest Arrivals"
        limit={LATEST_PRODUCTS_LIMIT}
      />
    </>
  );
};

export default HomePage;
