import {
  FilteredData,
  CategorizeProductsByKeys,
} from '../hooks/recommendation/recommended-products/utils';

describe('useRecommendedProducts utils', () => {
  it('should return filtered data', () => {
    const data = [[{ id: 1 }], [{ id: 2 }], [{ id: 3 }], undefined];
    const expected = [[{ id: 1 }], [{ id: 2 }], [{ id: 3 }]];

    expect(FilteredData(data)).toEqual(expected);
  });

  it('should return categorized data', () => {
    const data = [
      [{ id: 1 }],
      [{ id: 2 }],
      [{ id: 3 }],
      undefined,
      [{ id: 4 }],
      [{ id: 5 }],
      [{ id: 6 }],
      undefined,
    ];

    const expected = {};

    expect(CategorizeProductsByKeys(data)).toEqual(expected);
  });
});
