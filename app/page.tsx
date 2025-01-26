import { Cart, Products, ConfirmOrder } from "@/components/products";

export default function Home() {
  return (
    <main className="p-6 grid grid-rows-[1fr_auto] lg:grid-rows-1 lg:grid-cols-[1fr_384px] gap-8 max-w-7xl mx-auto w-full">
      <Products />
      <Cart>
        <ConfirmOrder />
      </Cart>
    </main>
  );
}
