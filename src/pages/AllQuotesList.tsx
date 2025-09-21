import { useGetQuotesQuery } from '../query/quotes.query'
import type { Quote } from '../api/quotes/quotes.types'
import QuoteCard from '../components/Quote/QuoteCard'
import "./styles/AllQuotes.css"
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'


function AllQuotesList() {
    const { data: quotes = [], isLoading } = useGetQuotesQuery()
    const [searchQuery, setSearchQuery] = useState("")

    const queryHandler = (e: { target: { value: string } }) => {
        setSearchQuery(e.target.value.toLowerCase())
    }

    const filteredData = quotes?.filter((el: { text: string }) => {
      if(searchQuery === "") {
        return el;
      } else {
        return el.text.toLowerCase().includes(searchQuery)
      }
    })

    if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">Your quotes</Typography>
        <TextField onChange={queryHandler}/>
      </Box>
      <div className="quotes-grid">
          {filteredData?.map((quote:Quote) => (
              <QuoteCard 
                id={quote.id} 
                bookTitle={quote.bookTitle} 
                bookAuthor={quote.bookAuthor} 
                text={quote.text} 
                isFavourite={quote.isFavourite} 
                tagList={quote.tagList} 
                page="All Quotes"
              />
          ) )}
      </div>
    </div>
  )
}

export default AllQuotesList