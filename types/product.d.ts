interface ImageSources {
  thumbnail: string;
  mobile: string;
}

export interface ProductRequest {
  id: number;
  image: ImageSources;
  name: string;
  category: string;
  price: number;
}

export type Product = ProductRequest & {
  quantity: number;
};
