import ProductCard from "./components/features/Products/ProductCard";
import { mockProducts } from "./utils/helpers";

function App() {

  return (
		<section className="w-[90dvw] 2xl:max-w-7xl mx-auto py-10">
			<h1 className="text-3xl md:text-4xl mb-6 text-center font-semibold">Welcome to Dravos Commerce</h1>

			<h2 className="mb-5 text-xl">Products List</h2>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
				{mockProducts.map((product, i) => (
					<ProductCard key={`product-key-${i + 1}`} {...product}/>
				))}
			</div>
		</section>
  );
}

export default App
