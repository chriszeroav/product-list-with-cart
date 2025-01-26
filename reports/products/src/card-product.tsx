import { FC } from "react";
import { Product } from "@/types";
import { Button } from "@/components/ui";
import { MinusIcon, PlusIcon, ShoppingCartIcon } from "lucide-react";
import { useProductsStore } from "@/store";
import { cn } from "@/lib/utils";

interface CardProductProps extends Product {}

export const CardProduct: FC<CardProductProps> = ({
  id,
  image,
  name,
  price,
  category,
  quantity,
}) => {
  return (
    <li>
      <div className="relative mb-8">
        <img
          className={cn(
            "rounded-[8px] border-2",
            quantity > 0 ? "border-red-custom" : "border-transparent",
            "transition-colors"
          )}
          src={image.mobile}
          alt=""
        />
        <ProductAction id={id} quantity={quantity} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-rose-custom-500 text-preset4">{category}</p>
        <h2 className="text-rose-custom-900 text-preset3">{name}</h2>
        <p className="text-red-custom text-preset3">${price.toFixed(2)}</p>
      </div>
    </li>
  );
};

const ProductAction = ({ quantity, id }: { quantity: number; id: number }) => {
  const { addProduct, restProduct } = useProductsStore();

  if (quantity > 0) {
    return (
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-[22px] w-[160px] h-11 p-3 rounded-full bg-red-custom flex">
        <button
          onClick={() => restProduct(id)}
          className="size-5 border border-white rounded-full flex items-center justify-center group hover:bg-white"
        >
          <MinusIcon className="size-4 text-white group-hover:text-red-custom transition-colors" />
        </button>
        <p className="flex-1 text-center text-white text-preset4-bold">
          {quantity}
        </p>
        <button
          onClick={() => addProduct(id)}
          className="border size-5 border-white rounded-full flex items-center justify-center group hover:bg-white"
        >
          <PlusIcon className="size-4 text-white group-hover:text-red-custom transition-colors" />
        </button>
      </div>
    );
  }

  return (
    <Button
      onClick={() => addProduct(id)}
      variant="outline"
      className="absolute left-1/2 -translate-x-1/2 -bottom-[22px]  w-[160px] h-11 p-3 rounded-full"
    >
      <ShoppingCartIcon className="size-5 text-red-custom" />
      <span className="text-preset4-bold">Add to Cart</span>
    </Button>
  );
};
