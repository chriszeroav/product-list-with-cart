import { ProductRequest } from "@/types";

export const fetchProducts = async (): Promise<ProductRequest[]> => {
  try {
    const response = await fetch("/data.json", {
      cache: "force-cache",
    });
    const data: ProductRequest[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Error Desconocido");
  }
};
