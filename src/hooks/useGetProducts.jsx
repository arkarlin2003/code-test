import { randomProducts } from "@/lib/utils"
import { useGetProductsQuery } from "@/services/api/productApi"

const useGetProducts = () => {
    const {data:products} = useGetProductsQuery()
  return products && randomProducts(products)
}

export default useGetProducts