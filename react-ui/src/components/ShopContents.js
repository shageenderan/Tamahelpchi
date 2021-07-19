import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import InfoIcon from '@material-ui/icons/Info';

import { IconButton } from '@material-ui/core';
import ItemModal from './ItemModal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  imageList: {
    backgroundColor: "#BBEEDB",
    width: 500,
    height: 600,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     price: 'price',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ShopContents(props) {
  const classes = useStyles();
  const [openItemModal, toggleModal] = useState(props.data.map(_ => false))

  return (
    <div id="Outer Div" className={classes.root}>
      <ImageList id="ImageList" rowHeight={180} className={classes.imageList}>
        {props.data.map((item, i) => (
         [ <ImageListItem key={i} onClick={() => toggleModal(prev => prev.map((elem, indx) => indx === i ? true : false))}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.price} Points</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>,
          <ItemModal category={props.category} user={props.user} {...item} open={openItemModal[i]} handleClose={()=>toggleModal(prev => prev.map((elem, indx) =>  false))}></ItemModal>
        ]
          
        ))}
      </ImageList>
    </div>
  );
}