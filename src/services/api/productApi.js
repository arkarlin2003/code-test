import { CATEGORYS_URL, PRODUCTS_URL } from "@/constants";
import { api } from "./api";

export const productApi = api.injectEndpoints({
    endpoints:(builder)=>({
        getCategories:builder.query({
            query:()=>({
                url:CATEGORYS_URL
            }),
            providesTags:['Product']
        }),
        getProducts:builder.query({
            query:()=>({
                url:PRODUCTS_URL
            }),
            providesTags:['Product']
        })
    })
})

export const {useGetProductsQuery,useGetCategoriesQuery} = productApi