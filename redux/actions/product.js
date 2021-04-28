export const CURRENTPRODUCT = "CURRENTPRODUCT";

export const currentProduct = (product) => ({
  type: CURRENTPRODUCT,
  payload: product,
});
