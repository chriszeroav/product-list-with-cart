"use client";

import { FC } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  ScrollArea,
} from "@/components/ui";
import Image from "next/image";
import { Order } from "@/reports";
import { useProductsStore } from "@/store";

interface ConfirmOrderProps {}

export const ConfirmOrder: FC<ConfirmOrderProps> = () => {
  const { cart, cleanOrder } = useProductsStore();

  const totalBalance = cart.reduce((a, b) => a + b.quantity * b.price, 0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full h-[52px]">
          <span className="text-preset3">Confirm Order</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md gap-8 overflow-auto">
        <DialogHeader>
          <Image
            width={48}
            height={48}
            alt="icon-order-confirmed"
            src="/assets/images/icon-order-confirmed.svg"
          />
          <DialogTitle className="text-rose-custom-900 text-preset1">
            Order Confirmed
          </DialogTitle>
          <DialogDescription className="text-rose-custom-500 text-base">
            We hope you enjoy your food!.
          </DialogDescription>
        </DialogHeader>
        <section className="bg-rose-custom-50 py-6 rounded-[8px] flex flex-col gap-6">
          <ScrollArea type="always" className="max-h-64 px-6">
            <Order data={cart} />
          </ScrollArea>

          <div className="h-[1px] bg-rose-custom-100 mx-6" />

          <p className="inline-flex px-6 justify-between text-rose-custom-900 items-baseline">
            <span className="text-preset4">Order Total</span>
            <span className="text-preset2">${totalBalance}</span>
          </p>
        </section>
        <Button onClick={cleanOrder} className="h-[52px] rounded-full">
          <span className="text-preset3">Start New Order</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
};
