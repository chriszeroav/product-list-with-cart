import { FC } from "react";
import { Product } from "@/types";
import Image from "next/image";

interface ItemOrderProps extends Product {}

export const ItemOrder: FC<ItemOrderProps> = ({
  name,
  image,
  price,
  quantity,
}) => {
  return (
    <li className="flex items-center justify-between pt-4 first:pt-0">
      <div className="flex gap-4">
        <img
          width={48}
          height={48}
          src={image.thumbnail}
          alt={name}
          className="rounded-[4px]"
        />
        <div className="flex flex-col justify-between">
          <h4 className="text-rose-custom-900 text-preset4-bold">{name}</h4>
          <div className="flex gap-2 items-center">
            <p className="text-red-custom text-preset4-bold">{quantity}x</p>
            <p className="text-rose-custom-500 text-preset4">
              @ ${price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <p className="text-rose-custom-900 text-preset3">
        ${(quantity * price).toFixed(2)}
      </p>
    </li>
  );
};

/*
<div className="flex flex-col gap-2">
        <h4 className="text-rose-custom-900 text-preset4-bold">{name}</h4>
        <div className="flex gap-2 items-center">
          <p className="text-red-custom text-preset4-bold">{quantity}x</p>
          <p className="text-rose-custom-500 text-preset4">
            @ ${price.toFixed(2)}
          </p>
        </div>
      </div>
*/
