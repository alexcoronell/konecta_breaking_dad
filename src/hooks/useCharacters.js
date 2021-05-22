import { useState } from "react"

const INITIAL_PAGE = 0;

export const useCharacters = () => {

    const [page, setPage] = useState(INITIAL_PAGE);

    const [maxPage, setMaxPage] = useState(0)

    const handleFirstPage = () => {
        setPage(0)
        console.log(page);
    }

     const handlePrevPage = () => {
        if (page > 0) {
            setPage(page -1)
        } else {
            return;
        }
    }

    const handleNextPage = () => {
        setPage(page + 1)
    }

    const handleLastPage = (maxPage) => {
        setPage(maxPage)
        console.log(page);
    }



    return [handleFirstPage, handlePrevPage, handleNextPage, handleLastPage, page]
}