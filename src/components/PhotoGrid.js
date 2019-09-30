import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import image from '../images/review.png';
const tileData = [
  { img: image },
  { img: image },
  { img: image },
  { img: image },
  { img: image },
  { img: image },
  { img: image },
  { img: image },
  { img: image },
  { img: image },
  { img: image },
  { img: image },
  { img: image },
  { img: image },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 'calc(85vh - 100px)',
  },
  review: {
    width: '33%',
  },
}));


export default function PhotoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cols={3} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile className={classes.review} key={tile.img}>
            <img src={tile.img} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
