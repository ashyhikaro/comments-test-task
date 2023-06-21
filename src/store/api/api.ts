import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {QueryData} from '../../types/QueryData'

const API_URL = "https://dummyjson.com/comments"

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ["Comments"],

    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),

    endpoints: builder => ({
        getComments: builder.query<QueryData, null>({
            query: () => `/?limit=3`,
            providesTags: () => [{
                type: 'Comments',
            }]
        }),
    })
})

export const { useGetCommentsQuery } = api