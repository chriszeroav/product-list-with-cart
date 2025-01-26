import { Product, ProductRequest } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  products: Product[];
  updateProducts: (products: ProductRequest[]) => void;

  cart: Product[];
  addProduct: (productID: number) => void;
  restProduct: (productID: number) => void;
  removeProduct: (productID: number) => void;
  cleanOrder: () => void;
}

export const useProductsStore = create<State>((set, get) => {
  return {
    products: [],
    cart: [],

    updateProducts: (products: ProductRequest[]) => {
      const newProducts = products.map(
        (item): Product => ({
          ...item,
          quantity: 0,
        })
      );
      set({ products: newProducts });
    },

    addProduct: (productID: number) => {
      const { products, cart } = get();

      const newProducts = structuredClone(products);
      const newCart = structuredClone(cart);

      const productIndex = newProducts.findIndex(
        (item) => item.id === productID
      );

      if (productIndex === -1) return;

      newProducts[productIndex] = {
        ...newProducts[productIndex],
        quantity: newProducts[productIndex].quantity + 1,
      };

      const cartIndex = newCart.findIndex((item) => item.id === productID);

      if (cartIndex === -1) newCart.push(newProducts[productIndex]);
      else newCart[cartIndex] = newProducts[productIndex];

      set({ products: newProducts, cart: newCart });
    },

    restProduct: (productID: number) => {
      const { products, cart } = get();
      const newProducts = structuredClone(products);
      const newCart = structuredClone(cart);

      const productIndex = newProducts.findIndex(
        (item) => item.id === productID
      );

      if (productIndex === -1) return;

      newProducts[productIndex] = {
        ...newProducts[productIndex],
        quantity: newProducts[productIndex].quantity - 1,
      };

      const cartIndex = newCart.findIndex((item) => item.id === productID);

      if (cartIndex === -1) return;

      newCart[cartIndex] = newProducts[productIndex];

      const finalCart = newCart.filter((item) => item.quantity !== 0);

      set({ products: newProducts, cart: finalCart });
    },

    removeProduct: (productID: number) => {
      const { cart, products } = get();

      const newProducts = structuredClone(products);

      const productIndex = newProducts.findIndex(
        (item) => item.id === productID
      );

      if (productIndex === -1) return;

      newProducts[productIndex] = {
        ...newProducts[productIndex],
        quantity: 0,
      };

      const newCart = cart.filter((item) => item.id !== productID);

      set({ cart: newCart, products: newProducts });
    },

    cleanOrder: () => {
      const { products } = get();

      const newProducts = products.map((item) => ({
        ...item,
        quantity: 0,
      }));

      set({ cart: [], products: newProducts });
    },
  };
});
