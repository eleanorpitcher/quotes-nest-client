import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'
import { IoTrashBinOutline } from "react-icons/io5";
import { useDeleteQuoteMutation } from '../../query/quotes.query';
import useConfirmationModal from '../../hooks/useConfirmationModal';
import ConfirmationModal from '../shared/ConfirmationModal';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import useFavouriteQuote from '../../hooks/useFavouriteQuote';
import Divider from '@mui/material/Divider';
import TagsList from './TagsList';
import '../../pages/styles/AllQuotes.css'
import { useNavigate } from 'react-router';

interface QuoteCardProps {
    id: string;
    bookTitle?: string;
    bookAuthor?: string;
    text: string;
    isFavourite: boolean;
    tagList?: string[];
    page: 'All Quotes' | 'One Quote';
}

interface DeleteModalCopyProps {
    header: string;
    text: string;
    confirmationButton: string;
    cancelButton: string;
}

const deleteModalCopy: DeleteModalCopyProps = {
    header: "Delete quote",
    text: "Are you sure you want to delete this quote?",
    confirmationButton: "Delete",
    cancelButton: "Cancel"
}

function QuoteCard({ id, bookTitle, bookAuthor, text, isFavourite, tagList, page }: QuoteCardProps) {
    const { favourite, toggleFavourite } = useFavouriteQuote(isFavourite, {
        id,
        text,
        bookTitle,
        bookAuthor,
        tagList,
        isFavourite
    })
    const navigate = useNavigate()
    const deleteQuoteMutation = useDeleteQuoteMutation()

    const { isOpen, openModal, closeModal, confirm } = useConfirmationModal()
    
    const card = (
        <React.Fragment>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography sx={{ fontSize: 20, fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer' }} onClick={() => navigate(`/quotes/${id}`)}>
                        {bookTitle}
                    </Typography>
                    <Box onClick={toggleFavourite} sx={{ cursor: 'pointer' }}>
                        {favourite ? <FaHeart/> :  <CiHeart/>}
                    </Box>
                </Box>
                <Typography gutterBottom sx={{ fontSize: 16, fontWeight: 'light' }}>
                    {bookAuthor}
                </Typography>
                <Typography gutterBottom variant='body2' className={page === "All Quotes" ? "overflow-text" : undefined}>
                    "{text}"
                </Typography>
                <Divider/>
                <Box className="tagsList">
                    <TagsList tagList={tagList ?? []}/>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <IoTrashBinOutline style={{ cursor: "pointer" }} onClick={() => openModal(() => deleteQuoteMutation.mutate({ id }))} />
                </Box>
            </CardContent>
        </React.Fragment>
    )

  return (
    <>
    <Box>
        <Card sx={{ width: page === "All Quotes" ? "400px" : "600px", height: page === "All Quotes" ? "250px" : "350px" }}>{card}</Card>
    </Box>
    {isOpen && (
        <ConfirmationModal 
            header={deleteModalCopy.header} 
            text={deleteModalCopy.text} 
            confirmationButton={deleteModalCopy.confirmationButton} 
            cancelButton={deleteModalCopy.cancelButton}
            onConfirm={confirm}
            onCancel={closeModal}
        />
    )}
    </>
  )
}

export default QuoteCard