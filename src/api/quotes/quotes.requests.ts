import type { getDeleteQuoteParam, createQuoteParam, updateQuoteParam } from "./quotes.types";
import apiClient from "../apiClient";

export const getQuote = async ({id}: getDeleteQuoteParam) => {
    const response = await apiClient({
        method: 'get',
        url: `/quotes/${id}`
    })
    return response.data;
}

export const getQuotes = async () => {
    const response = await apiClient({
        method: 'get',
        url: `/quotes`
    })
    return response.data;
}

export const createQuote = async ({text, bookTitle, bookAuthor, tagList, isFavourite = false}: createQuoteParam) => {
    return await apiClient({
        method: 'post',
        url: `/quotes`,
        data: {
            text,
            bookTitle,
            bookAuthor,
            tagList,
            isFavourite
        }
    })
}

export const updateQuote = async ({id, text, bookTitle, bookAuthor, tagList, isFavourite}: updateQuoteParam) => {
    return await apiClient({
        method: 'put',
        url: `/quotes/${id}`,
        data: {
            text,
            bookTitle,
            bookAuthor,
            tagList,
            isFavourite
        }
    })
}

export const deleteQuote = async ({ id }: getDeleteQuoteParam) => {
    return await apiClient({
        method: 'delete',
        url: `/quotes/${id}`
    })
}