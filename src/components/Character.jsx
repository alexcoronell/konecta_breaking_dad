import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types'
import Quotes from './Quotes';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Character = ({char_id, img, name, nickname, portrayed, birthday, status}) => {

    const [author, setAuthor] = useState()

    useEffect(() => {
        let author = name.replace(' ','+').replace(' ','+').replace('.','');
        setAuthor(author)
    }, [name])


    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
          marginBotton: 100
        },
        media: {
          height: 0,
          paddingTop: '100%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: red[500],
        },
      }));

        const classes = useStyles();
        const [expanded, setExpanded] = useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
          };
    
    return (

        <Card m={1} className={`${classes.root} my-3 mx-2`}>
            <CardHeader
                title={name}
                subheader={`Nickname: ${nickname}`}
            />
            <CardMedia
                className={classes.media}
                image={img}
                title={name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className="text-center">
                {`Portrait: ${portrayed}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className="text-center">
                {`Birthday: ${birthday}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className="text-center">
                {`Status: ${status}`}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph className="text-center"><b>Quotes:</b></Typography>
                    <Quotes author={author} />
                </CardContent>
                <Link to={`/character/${char_id}`} className="card-link">
                    <Button className="mt-0 mb-3" variant="outlined">More Info</Button>
                </Link>
            </Collapse>
        </Card>
    )
}

Character.propTypes = {
    char_id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    nickname: PropTypes.string,
    portrayed: PropTypes.string
}

export default Character
