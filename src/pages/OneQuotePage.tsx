import { useParams } from "react-router";
import QuoteCard from "../components/Quote/QuoteCard";
import { useGetQuoteQuery, useUpdateQuoteMutation } from "../query/quotes.query";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";


function OneQuotePage() {

    const [isEditing, setIsEditing] = useState(false)
    const { id } = useParams<{ id: string }>()
    const { data } = useGetQuoteQuery(id!)
    const editQuoteMutation = useUpdateQuoteMutation()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'end' }}>
        {/* <Button onClick={() => setIsEditing(true)}>Edit quote</Button> */}
        { data ? 
        <QuoteCard 
            id={data?.id} 
            bookTitle={data?.bookTitle} 
            bookAuthor={data?.bookAuthor} 
            text={data?.text} 
            isFavourite={data?.isFavourite} 
            tagList={data?.tagList} 
            page="One Quote"
        />
        : 
        <p>No quote found</p>
        }

        {/* {isEditing && (

        )} */}
        
    </Box>
  )
}

export default OneQuotePage