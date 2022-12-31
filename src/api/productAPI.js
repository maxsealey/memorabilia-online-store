import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8787"}),
    endpoints: (builder) => ({
        getAllproducts: builder.query({
            query: () => "products",
        }),
    })
});

export const { useGetAllproductsQuery } = productAPI;