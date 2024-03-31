export interface ProductGroup {
  id: number;
  name: string;
}

export default defineEventHandler(async (): Promise<ProductGroup[]> => {
  return [
    {
      id: 1,
      name: "Косметика",
    },
    {
      id: 2,
      name: "Одежда",
    },
    {
      id: 3,
      name: "Обувь",
    },
    {
      id: 4,
      name: "Аксесуары",
    },
  ];
});
