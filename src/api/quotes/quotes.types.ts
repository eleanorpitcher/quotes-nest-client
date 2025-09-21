export interface Quote {
    id: string;
    text: string;
    bookTitle?: string;
    bookAuthor?: string;
    tagList?: string[];
    isFavourite: boolean;
}

export interface getDeleteQuoteParam {
    id: string;
}

export interface createQuoteParam {
    text: string;
    bookTitle?: string;
    bookAuthor?: string;
    tagList?: string[];
    isFavourite: boolean;
}

export interface updateQuoteParam {
    id: string;
    text: string;
    bookTitle?: string;
    bookAuthor?: string;
    tagList?: string[];
    isFavourite: boolean;
}