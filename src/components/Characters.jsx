import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Componentes
import Character from './Character';
import { CircularProgress, Button, ButtonGroup } from '@material-ui/core';

// Hooks
import { useCharacters } from './../hooks/useCharacters';

// Servicios
import getCharacters, { getCharactersAll } from './../services/getCharacters';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      Width: 'auto'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const Characters = () => {

    const [characterList, setCharacterList] = useState([]);

    const [loading, setLoading] = useState(false)

    const [handleFirstPage, handlePrevPage, handleNextPage, handleLastPage, page] = useCharacters()

    const [maxPage, setMaxPage] = useState(0);

    const [pagePerPage, setPagePerPage] = useState(5)

    const classes = useStyles();

    const handleChange = (event) => {
        setPagePerPage(event.target.value);
      };

    useEffect(() => {
        setLoading(true)
        getCharacters()
            .then(characters => setCharacterList(characters))
            .then(() => {
                setTimeout(() => setLoading(false), 100);
            });
        getCharactersAll()
            .then(charactersAll => {
                setMaxPage(charactersAll);
            })
    }, [maxPage])

    useEffect(() => {
        setLoading(true)
        getCharacters(page, pagePerPage)
            .then(characters => setCharacterList(characters))
            .then(() => {
                setTimeout(() => setLoading(false), 50);
            });
    }, [page, pagePerPage])

    return (
        <main className="characters container-fluid">
           { loading
           ? <> <h1>Characters</h1>
                <CircularProgress />
            </>
           : <>
                <h1>Characters</h1>
            <section className="characters__list row">
            {
                characterList.map(({char_id, img, name, nickname, portrayed, birthday, status}) => {
                    return (
                        <Character
                            key={char_id}
                            char_id = {char_id}
                            img = {img}
                            name = {name}
                            nickname = {nickname}
                            portrayed = {portrayed}
                            birthday = {birthday}
                            status = {status}
                        />
                    )
                })
            }
            </section>
            <ButtonGroup className='buttonGroup' size="large" color="primary" aria-label="large outlined primary button group">
                <Button onClick={handleFirstPage}>First</Button>
                <Button onClick={handlePrevPage}>Prev</Button>
                <Button className="currentPage">{page + 1}</Button>
                <Button onClick={() => handleNextPage(maxPage)}>Next</Button>
                <Button onClick={() => handleLastPage(maxPage)}>Last</Button>
            </ButtonGroup>
            <br />
            <FormControl variant="outlined" className={`${classes.formControl} mt-3`}>
                <InputLabel className="mt-1 p-1" id="demo-simple-select-outlined-label">ItemsPerPage</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={pagePerPage}
                onChange={handleChange}
                label="Items"
                >
                <MenuItem value="5">
                    <em>5</em>
                </MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
            </FormControl>
            </>
            }
        </main>
    )
}

export default React.memo(Characters)
