import { useSelector } from "react-redux"

const useCheckProduct = (id) => {
  const cart = useSelector(state=>state.carts)
 const existItem = cart?.cartItems?.find(item=> item.product.id == id)
  return existItem ? true : false;
}

export default useCheckProduct