import { FC } from "react";
import { Product } from "@/types";
import { ItemOrder } from "./src/item-order";

interface OrderProps {
  data: Product[];
}

export const Order: FC<OrderProps> = ({ data }) => {
  return (
    <ul className="divide-y-[1px] space-y-4 divide-rose-custom-100">
      {data.map((item) => (
        <ItemOrder key={item.id} {...item} />
      ))}
    </ul>
  );
};
