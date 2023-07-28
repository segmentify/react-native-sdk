//@ts-nocheck

/**
 * @description This file contains all the utility functions used in the application.
 */

export const FilteredData = (data) =>
  data?.filter((item) => item !== undefined);

export const CategorizeProductsByKeys = (data: any) => {
  const categorizedData = {};
  data.forEach((obj: any) => {
    if (obj !== undefined) {
      const keys = Object.keys(obj);
      keys.forEach((key) => {
        const value = obj[key];
        if (Array.isArray(value) && value.length > 0) {
          if (!categorizedData[key]) {
            categorizedData[key] = [];
          }
          categorizedData[key].push(value);
        }
      });
    }
  });
  return categorizedData;
};

export const ResolveRecommendedProducts = (data: any) => {
  if (!data) return 'Event data has not found recommended products.';

  return data?.responses[0]?.map(
    (item: any) => item?.params?.recommendedProducts
  );
};
