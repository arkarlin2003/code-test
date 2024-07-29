import { useGetCategoriesQuery } from "@/services/api/productApi"

const useGetCategories = () => {
    const {data:categories} = useGetCategoriesQuery()
  return categories && categories
}

export default useGetCategories