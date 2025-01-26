"use client";

import { FC } from "react";
import { Products as ProductsReport } from "@/reports";
import { useGetProducts } from "@/hooks";

interface ProductsProps {}

export const Products: FC<ProductsProps> = () => {
  const [products, loading, error] = useGetProducts();

  if (loading) {
    return (
      <div className="flex items-center justify-center border rounded-[8px] border-rose-custom-300">
        <div className="loader" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center border rounded-[8px] border-rose-custom-300 p-5">
        <p className="text-preset2 text-rose-custom-500 text-center">
          {error || "Error al traer los datos"}
        </p>
      </div>
    );
  }

  return (
    <section>
      <h1 className="text-rose-custom-900 text-preset1 mb-8">Desserts</h1>
      <ProductsReport data={products} />
    </section>
  );
};
