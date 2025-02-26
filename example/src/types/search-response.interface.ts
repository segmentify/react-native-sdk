export interface ISearchResponse {
  allSizes: string[];
  brand: string;
  category: string[];
  colors: string[];
  currency: string;
  fb: boolean;
  gender: string;
  groupId: string;
  image: string;
  inStock: boolean;
  insertTime: number;
  labels: string[];
  language: string;
  lastBoughtTime: number;
  lastUpdateTime: number;
  mainCategory: string;
  name: string;
  oldPriceText: string;
  params: Params;
  price: number;
  priceText: string;
  productId: string;
  publishTime: number;
  sizes: string[];
  specialPriceText: string;
  stockCount: number;
  url: string;
}

interface Params {
  color: string;
  gtin: string;
  model: string;
  productType: string;
  season: string;
  seasonYear: string;
  selectedSize: string;
}
