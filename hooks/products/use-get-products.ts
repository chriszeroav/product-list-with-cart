"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";
import { fetchProducts } from "@/services";
import { useProductsStore } from "@/store";

export const useGetProducts = (): [Product[], boolean, string] => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { products, updateProducts } = useProductsStore();

  const getProducts = async () => {
    try {
      const newProducts = await fetchProducts();
      updateProducts(newProducts);
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        updateProducts([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return [products, loading, error];
};
