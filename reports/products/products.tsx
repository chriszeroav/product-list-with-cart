import { FC } from "react";
import { Product } from "@/types";
import { CardProduct } from "./src/card-product";

interface ProductsProps {
  data: Product[];
}

export const Products: FC<ProductsProps> = ({ data }) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
      {data.map((item) => (
        <CardProduct key={item.id} {...item} />
      ))}
    </ul>
  );
};
