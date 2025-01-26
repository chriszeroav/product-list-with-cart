import { FC } from "react";
import { Product } from "@/types";
import { XCircleIcon } from "lucide-react";
import { useProductsStore } from "@/store";

interface ItemCardProps extends Product {}

export const ItemCard: FC<ItemCardProps> = ({ id, name, price, quantity }) => {
  const { removeProduct } = useProductsStore();

  return (
    <li className="flex items-center justify-between pt-4 first:pt-0">
      <div className="flex flex-col gap-2">
        <h4 className="text-rose-custom-900 text-preset4-bold">{name}</h4>
        <div className="flex gap-2 items-center">
          <p className="text-red-custom text-preset4-bold">{quantity}x</p>
          <p className="text-rose-custom-500 text-preset4">
            @ ${price.toFixed(2)}
          </p>
          <p className="text-rose-custom-500 text-preset4-bold">
            ${(quantity * price).toFixed(2)}
          </p>
        </div>
      </div>
      <button
        onClick={() => removeProduct(id)}
        className="text-rose-custom-400 hover:text-rose-custom-900 transition-colors"
      >
        <XCircleIcon className="size-5" />
      </button>
    </li>
  );
};
