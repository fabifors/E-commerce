import { atom, useRecoilState } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});

export default cartState;

export function CreateCartAPI() {
  const [cart, setCart] = useRecoilState(cartState);

  function addToCart(id, qty = 1) {
    const product = cart.find((p) => p.id !== id);

    if (product) {
      const oldCartState = cart.filter((p) => p.id !== id)
      setCart([
        ...oldCartState,
        {
          id: id,
          qty: qty + 1,
        },
      ]);
      return;
    }
    setCart([...cart, { id, qty }])
  }
  function reduceQty(id) {
    const product = cart.find((p) => p.id === id);
    const oldQty = cart.filter((p) => p.id !== id);
    const newQty = [
      ...oldQty,
      { id, qty: product.qty > 1 ? qty - 1 : product.qty },
    ];
    setCart(newQty);
  }

  function increaseQty(id) {
    const product = cart.find((p) => p.id === id);
    const oldQty = cart.filter((p) => p.id !== id);
    const newQty = [...oldQty, { id, qty: product.qty + 1 }];
    setCart(newQty);
  }

  function removeFromCart(id) {
    const newCartState = cart.filter((p) => p.id !== id);
    setCart(newCartState);
  }
  return {
    cart,
    addToCart,
    reduceQty,
    increaseQty,
    removeFromCart,
  };
}
