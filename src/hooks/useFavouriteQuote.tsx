import { useState } from 'react'
import { useUpdateQuoteMutation } from '../query/quotes.query'
import type { Quote } from '../api/quotes/quotes.types'

function useFavouriteQuote(isFavourite: boolean, quote: Quote) {
    const [favourite, setFavourite] = useState(isFavourite)
    const editQuoteMutation = useUpdateQuoteMutation()

    const toggleFavourite = () => {
        const newValue = !favourite
        setFavourite(newValue)

        editQuoteMutation.mutate({ 
            id: quote.id,
            text: quote.text,
            bookTitle: quote.bookTitle,
            bookAuthor: quote.bookAuthor,
            tagList: quote.tagList,
            isFavourite: newValue 
        })
    }

  return { favourite, toggleFavourite }
}

export default useFavouriteQuote