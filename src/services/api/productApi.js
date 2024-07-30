import { CATEGORIES_URL,CATEGORY_PRODUCTS_URL, PRODUCTS_URL } from "@/constants";
import { api } from "./api";

export const productApi = api.injectEndpoints({
    endpoints:(builder)=>({
        getCategories:builder.query({
            query:()=>({
                url:CATEGORIES_URL
            }),
            providesTags:['Product']
        }),
        getProducts:builder.query({
            query:()=>({
                url:PRODUCTS_URL
            }),
            providesTags:['Product']
        }),
        getProduct:builder.query({
            query:(id)=>({
                url:`${PRODUCTS_URL}/${id}`
            }),
            providesTags:['Product']
        }),
        getCategoryProducts:builder.query({
            query:(slug)=>({
                url:`${CATEGORY_PRODUCTS_URL}/${slug}`
            }),
            providesTags:['Product']
        })
    })
})

export const {useGetProductsQuery,useGetCategoriesQuery,useGetProductQuery,useGetCategoryProductsQuery} = productApi