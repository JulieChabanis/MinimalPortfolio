import { Box, Typography} from '@mui/material'
import React from 'react'
import styles from './CardResume.module.css'

const CardResume = (props) => {

  return (
    <Box 
      className={styles.timelineItem}
    >
      <Typography className={styles.timelineIcon}>{props.icon}</Typography>
      <Typography variant="h18" className={styles.timelineDate}>{props.year}</Typography>
      <Typography variant="h17" className={styles.timelineTitle}>{props.title}</Typography>
      <Typography variant="h19" className={styles.timelineSociety}>{props.society}</Typography>
      <Typography variant="h20" className={styles.timelineDesc}>{props.desc}</Typography>

    </Box>
  )
}

export default CardResume