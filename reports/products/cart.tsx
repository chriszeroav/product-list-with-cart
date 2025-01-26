import { FC } from "react";
import { Product } from "@/types";
import { ItemCard } from "./src/item-cart";

interface CartProps {
  data: Product[];
}

export const Cart: FC<CartProps> = ({ data }) => {
  return (
    <ul className="divide-y-[1px] space-y-4 divide-rose-custom-100">
      {data.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </ul>
  );
};
