import { useMutation, useQuery } from "@tanstack/react-query"
import { QUERY_QUOTE_KEY, QUERY_QUOTES_KEY } from "../constants/query.constant"
import { getQuote, getQuotes, createQuote, updateQuote, deleteQuote } from "../api/quotes/quotes.requests"
import queryClient from "./queryClient"

export const useGetQuoteQuery = (id: string) => {
    return useQuery({
        queryKey: [QUERY_QUOTE_KEY, id],
        queryFn: () => getQuote({ id }),
        staleTime: 2000
    })
}

export const useGetQuotesQuery = () => {
    return useQuery({
        queryKey: [QUERY_QUOTES_KEY],
        queryFn: getQuotes,
        staleTime: 2000
    })
}

export const useCreateQuoteMutation = () => useMutation({ mutationFn: createQuote })

export const useUpdateQuoteMutation = () => useMutation({ 
    mutationFn: updateQuote,
    onSuccess: (data, variables) => {
        queryClient.setQueryData([QUERY_QUOTE_KEY, { id: variables.id }], data)
        queryClient.invalidateQueries({ queryKey: [QUERY_QUOTE_KEY]})
    } 
})

export const useDeleteQuoteMutation = () => {

    return useMutation({ 
        mutationFn: deleteQuote,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_QUOTES_KEY]})
        } 
    })
};