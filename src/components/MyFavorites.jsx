import React, { useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: '0 auto',
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const MyFavorites = () => {

    const classes = useStyles();

    const [favQuotes, setFavQuotes] = useState([]);

    const quotesNumber = window.localStorage.length;

    let data = [];

    if(favQuotes.length <= quotesNumber) {
        for (let i = 0; i <= quotesNumber -1; i++){
            const datakey = localStorage.key(i);

            const currentData = (JSON.parse(localStorage.getItem(datakey)));
            data.push(currentData);
        }
    }

    const handleClick = (e) => {
        console.log(e);
    }

    useEffect(() => {
        setFavQuotes(data);
    }, [data])

  

    return (
        <main>
            <h1>My favorite Quotes</h1>
            {
                favQuotes.map(({author, quote}) => {
                    return (
                        <List className={classes.root}>
                          <ListItem>
                            <ListItemAvatar>
                                <DeleteForeverOutlinedIcon
                                    onClick={handleClick}
                                />
                            </ListItemAvatar>
                            <ListItemText 
                                key={author+quote}
                                primary={author} 
                                secondary={quote} />
                          </ListItem>
                          <Divider variant="inset" component="li" />
                        </List>
                      );
                })
            }
        </main>
    )
}

export default MyFavorites
