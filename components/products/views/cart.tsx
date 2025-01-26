"use client";

import { FC, PropsWithChildren } from "react";
import { useProductsStore } from "@/store";
import { Cart as CartReport } from "@/reports";
import Image from "next/image";

interface CartProps extends PropsWithChildren {}

export const Cart: FC<CartProps> = ({ children }) => {
  const { cart } = useProductsStore();

  const totalBalance = cart.reduce((a, b) => a + b.quantity * b.price, 0);
  const totalProducts = cart.reduce((a, b) => a + b.quantity, 0);

  if (cart.length <= 0) {
    return (
      <section className="bg-white p-6 rounded-[12px] self-start flex flex-col gap-6 sticky top-6">
        <h2 className="text-red-custom text-preset2">
          Your Cart ({totalProducts})
        </h2>
        <div className="flex flex-col gap-4 py-4 items-center">
          <Image
            src="/assets/images/illustration-empty-cart.svg"
            width={128}
            height={128}
            alt="No Cart"
          />
          <p className="text-rose-custom-500 text-preset4-bold text-center">
            Your added items will appear here
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white p-6 rounded-[12px] self-start flex flex-col gap-6 sticky top-6">
      <h2 className="text-red-custom text-preset2">
        Your Cart ({totalProducts})
      </h2>
      <CartReport data={cart} />
      <div className="h-[1px] bg-rose-custom-100" />

      <p className="inline-flex justify-between text-rose-custom-900 items-baseline">
        <span className="text-preset4">Order Total</span>
        <span className="text-preset2">${totalBalance}</span>
      </p>

      <aside className="bg-rose-custom-50 flex items-center justify-center p-4 gap-2 rounded-[8px]">
        <Image
          width={20}
          height={20}
          src="/assets/images/icon-carbon-neutral.svg"
          alt="icon-carbon-neutral"
        />
        <p className="text-preset4 text-rose-custom-900">
          This is a <span className="text-preset4-bold">carbon-neutral</span>{" "}
          delivery
        </p>
      </aside>
      {children}
    </section>
  );
};
