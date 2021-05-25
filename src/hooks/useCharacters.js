import { useState } from "react"

const INITIAL_PAGE = 0;

export const useCharacters = () => {

    const [page, setPage] = useState(INITIAL_PAGE);

    const handleFirstPage = () => {
        setPage(0)
    }

     const handlePrevPage = () => {
        if (page > 0) {
            setPage(page - 1)
        } else {
            return;
        }
    }

    const handleNextPage = (maxPage) => {
        if(page < maxPage) {
            setPage(page + 1)
        } else {
            return
        }
    }

    const handleLastPage = (maxPage) => {
        setPage(maxPage)
    }



    return [handleFirstPage, handlePrevPage, handleNextPage, handleLastPage, page]
}