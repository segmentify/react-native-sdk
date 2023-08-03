//@ts-nocheck
import {
  FilteredData,
  CategorizeProductsByKeys,
  ResolveRecommendedProducts,
} from './utils';

export const useRecommendedProducts = ({
  recommendedProductsArray,
  algorithmName,
}: {
  recommendedProductsArray: any;
  algorithmName: string;
}): any => {
  const resolvedData = ResolveRecommendedProducts(recommendedProductsArray);
  const filteredData = FilteredData(resolvedData);
  const categorizedData = CategorizeProductsByKeys(filteredData);

  return {
    recommendedProducts: categorizedData[algorithmName],
  };
};
