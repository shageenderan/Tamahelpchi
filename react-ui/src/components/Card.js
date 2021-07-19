import React, { useRef, useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import InventoryItemModal from './InventoryItemModal'

const useStyles = makeStyles(theme => ({
  imageListMedium: {
    width: 500,
    height: 600,
  },
  imageListSmall: {
    width: 250,
    height: 250,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

export default function Card(props) {
  console.log("Card", props)
  const classes = useStyles()
  const [open, toggleModal] = useState(false)

  return (
    [<ImageListItem key={props.img} className={props.size == 'small' ? classes.imageListSmall : classes.imageListMedium} onClick={() => toggleModal(true)}>
      <img src={props.img} alt={props.title} />
      <ImageListItemBar
        title={props.title}
        subtitle={props.subtitle}
        actionIcon={
          <IconButton aria-label={`info about ${props.title}`} className={classes.icon}>
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>,
    <InventoryItemModal {...props} open={open} handleClose={()=>toggleModal(false)}></InventoryItemModal>
    ]
  )
}
