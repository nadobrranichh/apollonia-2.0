export interface CartItem {
  id: number;
  quantity: number;
}

export const getCartFromLocalStorage = function (): CartItem[] {
  const jsonData = localStorage.getItem("apollonia_cart");
  return jsonData ? (JSON.parse(jsonData) as CartItem[]) : [];
};

export const addToCart = function (itemToAdd: CartItem) {
  const cart = getCartFromLocalStorage();
  const index = cart.findIndex((cartItem) => cartItem.id === itemToAdd.id);
  if (index !== -1) return;
  cart.push(itemToAdd);
  localStorage.setItem("apollonia_cart", JSON.stringify(cart));
};

export const removeFromCart = function (itemToDelete: CartItem) {
  const cart = getCartFromLocalStorage();
  const index = cart.findIndex(
    (cartItem) => JSON.stringify(cartItem) === JSON.stringify(itemToDelete)
  );
  if (index === -1) return;
  cart.splice(index, 1);
  localStorage.setItem("apollonia_cart", JSON.stringify(cart));
};

export const refreshCart = function (newCartData: CartItem[]) {
  localStorage.setItem("apollonia_cart", JSON.stringify(newCartData));
};
